---
to: src/core/stores/<%= h.changeCase.lower(name) %>/thunks.ts
---
import { createAsyncThunk } from '~/libs';
import { PERSIST_KEYS } from '~/utils';

export const todoThunk = createAsyncThunk(
  `${PERSIST_KEYS.<%= h.changeCase.upper(name) %>_REDUX_SLICER}/todoThunk`,
  async () => {
    return {} as <%= h.changeCase.pascal(name) %>State;
  },
);
