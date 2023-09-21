export type SizingNone = {
  none: number;
};

export type Sizing<T> = {
  min: T;
  xxs: T;
  xs: T;
  sm: T;
  md: T;
  lg: T;
  xl: T;
  xxl: T;
  max: T;
};
