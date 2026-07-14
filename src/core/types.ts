export type IconStyle = 'stroke' | 'fill';
export type IconFillRule = 'nonzero' | 'evenodd';

export interface IconData {
  name: string;
  category: string;
  viewBox: string;
  style: IconStyle;
  fillRule: IconFillRule;
  paths: string[];
}
