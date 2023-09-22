import { AuthApi } from '~/infra';
import { createAsyncThunk } from '~/libs';
import { PERSIST_KEYS } from '~/utils';

import { setPartialUserState } from '../user/slices';
import { setAuthToken } from './slices';

export const signIn = createAsyncThunk(
  `${PERSIST_KEYS.AUTH_REDUX_SLICER}/signIn`,
  async (credentials: AuthCredentials, { dispatch }): Promise<AuthResponse> => {
    const response = await AuthApi.signIn(credentials);

    dispatch(setAuthToken(response.token));
    dispatch(
      setPartialUserState({
        username: response.username,
        email: response.email,
        firstName: response.firstName,
        lastName: response.lastName,
        gender: response.gender,
        image: response.image,
      }),
    );

    return response;
  },
);
