---
to: src/core/stores/<%= h.changeCase.lower(name) %>/slices.ts
---
import { PayloadAction, PersistReducer, createSlice } from '~/libs';
import { PERSIST_KEYS } from '~/utils';

import { getPersistConfig } from '../root.service';
import { todoThunk } from './thunks';

const initialState: <%= h.changeCase.pascal(name) %>State = {
  todoState: '',
};

const <%= h.changeCase.camel(name) %>Slice = createSlice({
  name: PERSIST_KEYS.<%= h.changeCase.upper(name) %>_REDUX_SLICER,
  initialState,
  reducers: {
    setTodoState(state, { payload }: PayloadAction<<%= h.changeCase.pascal(name) %>State>) {
      state.todoState = payload.todoState;
    },
  },
  extraReducers: (builder) =>
    builder.addCase(
      todoThunk.fulfilled,
      (state, { payload }: PayloadAction<<%= h.changeCase.pascal(name) %>State>) => {
        state.todoState = payload.todoState;
      },
    ),
});

export const { setTodoState } = <%= h.changeCase.camel(name) %>Slice.actions;
export default PersistReducer(
  getPersistConfig(PERSIST_KEYS.<%= h.changeCase.upper(name) %>_REDUX_SLICER),
  <%= h.changeCase.camel(name) %>Slice.reducer,
);
