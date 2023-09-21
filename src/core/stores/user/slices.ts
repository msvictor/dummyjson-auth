import { PayloadAction, PersistReducer, createSlice } from '~/libs';
import { PERSIST_KEYS } from '~/utils';

import { getPersistConfig } from '../root.service';
import { getUserData } from './thunks';

const initialState: UserState = {
  email: '',
  password: '',
};

const userSlice = createSlice({
  name: PERSIST_KEYS.USER_REDUX_SLICER,
  initialState,
  reducers: {
    setUser(state, { payload }: PayloadAction<UserState>) {
      state.email = payload.email;
      state.password = payload.password;
    },
  },
  extraReducers: (builder) =>
    builder.addCase(
      getUserData.fulfilled,
      (state, { payload }: PayloadAction<UserState>) => {
        state.email = payload.email;
        state.password = payload.password;
      },
    ),
});

export const { setUser } = userSlice.actions;
export default PersistReducer(
  getPersistConfig(PERSIST_KEYS.USER_REDUX_SLICER),
  userSlice.reducer,
);
