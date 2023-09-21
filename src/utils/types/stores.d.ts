declare type UserState = {
  email: string;
  password: string;
};

declare type ApplicationState = {
  user: UserState;
};
