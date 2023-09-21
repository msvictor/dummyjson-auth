const { ROUTES } = Modules;

declare type PrivateStackParams = {
  [ROUTES.PROFILE]: {
    params: {
      userId?: number;
    };
  };
};

declare type PublicStackParams = {
  [ROUTES.SIGN_IN]: undefined;
  [ROUTES.SIGN_UP]: undefined;
};
