import { UserApi } from '~/infra';
import { createAsyncThunk } from '~/libs';
import { PERSIST_KEYS } from '~/utils';

export const getUserData = createAsyncThunk(
  `${PERSIST_KEYS.USER_REDUX_SLICER}/getUserData`,
  async (userId: number): Promise<UserData> => {
    const response = await UserApi.getUser(userId);

    return response;
  },
);
