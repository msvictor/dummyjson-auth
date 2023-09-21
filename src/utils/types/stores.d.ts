declare type UserState = {
  email: string;
  password: string;
};

declare type ThemeState<ThemeType> = {
  theme: ThemeType;
  svg: SvgSet;
};

declare type ApplicationState<ThemeType> = {
  user: UserState;
  theme: ThemeState<ThemeType>;
};
