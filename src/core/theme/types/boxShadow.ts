export type ShadowSettings = {
  x: number;
  y: number;
  spread: number;
  color: string;
  blur: number;
};

export type BoxShadow = {
  none: ShadowSettings;
  xs: ShadowSettings;
  sm: ShadowSettings;
  md: ShadowSettings;
  lg: ShadowSettings;
  xl: ShadowSettings;
};
