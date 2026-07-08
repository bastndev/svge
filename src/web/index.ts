import { IconixIconElement } from './icon-element.js';

export { IconixIconElement };

const TAG_NAME = 'iconix-icon';

export function register(tagName: string = TAG_NAME): void {
  if (typeof customElements === 'undefined') return;
  if (!customElements.get(tagName)) {
    customElements.define(tagName, IconixIconElement);
  }
}

register();
