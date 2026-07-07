import { SvgeIconElement } from './icon-element.js';

export { SvgeIconElement };

const TAG_NAME = 'svge-icon';

export function register(tagName: string = TAG_NAME): void {
  if (typeof customElements === 'undefined') return;
  if (!customElements.get(tagName)) {
    customElements.define(tagName, SvgeIconElement);
  }
}

register();
