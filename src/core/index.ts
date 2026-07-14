import { icons } from './icons.gen.js';
import type { IconData, IconFillRule, IconStyle } from './types.js';

export type IconName = keyof typeof icons;
export type { IconData, IconFillRule, IconStyle };
export { icons };

export function getIcon(name: IconName): IconData {
  return icons[name];
}
