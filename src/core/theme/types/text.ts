import { Sizing } from './sizing';

export type FontsFamilies = {
  texts: Record<string, string>;
};

export type FontWeights = {
  thin: string;
  light: string;
  regular: string;
  medium: string;
  semiBold: string;
  bold: string;
  black: string;
};

export type FontSizes = Sizing<number>;

export type TextCase = {
  none: string;
  uppercase: string;
  lowercase: string;
  capitalize: string;
};

export type TextDecoration = {
  none: string;
  underline: string;
  lineThrough: string;
};
