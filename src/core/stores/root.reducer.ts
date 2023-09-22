import { AnyAction, Reducer, combineReducers } from '~/libs';

import auth from './auth/slices';
import theme from './theme/slices';
import user from './user/slices';

const combinedReducers = combineReducers({ auth, user, theme });

type RootState = ReturnType<typeof combinedReducers>;

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  return combinedReducers(state, action);
};

export default rootReducer;
