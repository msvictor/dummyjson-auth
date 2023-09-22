declare type AuthState = {
  user: string;
  pass: string;
  token: string;
  loading: boolean;
  error: boolean;
};

declare type AuthCredentials = {
  username: string;
  password: string;
};

declare type AuthResponse = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
};
