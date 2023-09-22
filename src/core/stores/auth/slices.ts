import {
  PayloadAction,
  PersistReducer,
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '~/libs';
import { PERSIST_KEYS } from '~/utils';

import { getPersistConfig } from '../root.service';
import { signIn } from './thunks';

const initialState: AuthState = {
  user: '',
  pass: '',
  token: '',
  loading: false,
  error: false,
};

const isActionPending = isPending(signIn);
const isActionRejected = isRejected(signIn);
const isActionFulfilled = isFulfilled(signIn);

const authSlice = createSlice({
  name: PERSIST_KEYS.AUTH_REDUX_SLICER,
  initialState,
  reducers: {
    setAuthState(state, { payload }: PayloadAction<AuthState>) {
      state.user = payload.user;
      state.pass = payload.pass;
      state.token = payload.token;
      state.loading = payload.loading;
      state.error = payload.error;
    },
    setAuthCredentials(state, { payload }: PayloadAction<AuthCredentials>) {
      state.user = payload.username;
      state.pass = payload.password;
    },
    setAuthToken(state, { payload }: PayloadAction<string>) {
      state.token = payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addMatcher(isActionPending, (state) => {
        state.loading = true;
      })
      .addMatcher(isActionRejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addMatcher(isActionFulfilled, (state) => {
        state.loading = false;
      }),
});

export const { setAuthState, setAuthCredentials, setAuthToken } =
  authSlice.actions;
export default PersistReducer(
  getPersistConfig(PERSIST_KEYS.AUTH_REDUX_SLICER),
  authSlice.reducer,
);
