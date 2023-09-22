import { PayloadAction, PersistReducer, createSlice } from '~/libs';
import { PERSIST_KEYS } from '~/utils';

import { getPersistConfig } from '../root.service';
import { getUserData } from './thunks';

const initialState: UserState = {
  username: '',
  email: '',
  firstName: '',
  lastName: '',
  gender: '',
  image: '',
};

const userSlice = createSlice({
  name: PERSIST_KEYS.USER_REDUX_SLICER,
  initialState,
  reducers: {
    setPartialUserState(state, { payload }: PayloadAction<UserState>) {
      state.username = payload.username;
      state.email = payload.email;
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.gender = payload.gender;
      state.image = payload.image;
    },
  },
  extraReducers: (builder) =>
    builder.addCase(
      getUserData.fulfilled,
      (state, { payload }: PayloadAction<UserState>) => {
        state.username = payload.username;
        state.email = payload.email;
        state.firstName = payload.firstName;
        state.lastName = payload.lastName;
        state.gender = payload.gender;
        state.image = payload.image;
      },
    ),
});

export const { setPartialUserState } = userSlice.actions;
export default PersistReducer(
  getPersistConfig(PERSIST_KEYS.USER_REDUX_SLICER),
  userSlice.reducer,
);
