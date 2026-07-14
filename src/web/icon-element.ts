import { getIcon, type IconName } from '../core/index.js';

const DEFAULT_SIZE = 24;
const DEFAULT_STROKE_WIDTH = 2;
const SVG_NS = 'http://www.w3.org/2000/svg';

export class SvghubIconElement extends HTMLElement {
  static get observedAttributes() {
    return ['name', 'size', 'color', 'stroke-width'];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    if (this.isConnected) this.render();
  }

  private render() {
    const name = this.getAttribute('name') as IconName | null;
    if (!name) {
      this.replaceChildren();
      return;
    }

    const icon = getIcon(name);
    if (!icon) {
      console.warn(`[svghub] Unknown icon "${name}"`);
      this.replaceChildren();
      return;
    }

    const size = this.getAttribute('size') ?? String(DEFAULT_SIZE);
    const color = this.getAttribute('color') ?? 'currentColor';
    const strokeWidth = this.getAttribute('stroke-width') ?? String(DEFAULT_STROKE_WIDTH);

    const svg = document.createElementNS(SVG_NS, 'svg');
    svg.setAttribute('viewBox', icon.viewBox);
    svg.setAttribute('width', size);
    svg.setAttribute('height', size);
    if (icon.style === 'fill') {
      svg.setAttribute('fill', color);
      svg.setAttribute('fill-rule', icon.fillRule);
    } else {
      svg.setAttribute('fill', 'none');
      svg.setAttribute('stroke', color);
      svg.setAttribute('stroke-width', strokeWidth);
      svg.setAttribute('stroke-linecap', 'round');
      svg.setAttribute('stroke-linejoin', 'round');
    }
    svg.setAttribute('aria-hidden', 'true');

    for (const d of icon.paths) {
      const path = document.createElementNS(SVG_NS, 'path');
      path.setAttribute('d', d);
      svg.appendChild(path);
    }

    this.replaceChildren(svg);
  }
}
