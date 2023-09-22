declare type ApplicationState<ThemeType> = {
  user: UserState;
  theme: ThemeState<ThemeType>;
  auth: AuthState;
};
