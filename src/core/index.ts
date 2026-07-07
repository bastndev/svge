import { icons } from './icons.gen.js';
import type { IconData } from './types.js';

export type IconName = keyof typeof icons;
export type { IconData };
export { icons };

export function getIcon(name: IconName): IconData {
  return icons[name];
}
