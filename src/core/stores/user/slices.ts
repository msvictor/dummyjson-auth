import { PayloadAction, PersistReducer, createSlice } from '~/libs';
import { PERSIST_KEYS } from '~/utils';

import { getPersistConfig } from '../root.service';
import { getUserData } from './thunks';

const initialState: UserData = {
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
    setPartialUserData(state, { payload }: PayloadAction<UserData>) {
      state.id = payload.id;
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
      (state, { payload }: PayloadAction<UserData>) => {
        state.id = payload.id;
        state.username = payload.username;
        state.email = payload.email;
        state.firstName = payload.firstName;
        state.lastName = payload.lastName;
        state.gender = payload.gender;
        state.image = payload.image;
        state.maidenName = payload.maidenName;
        state.age = payload.age;
        state.phone = payload.phone;
        state.password = payload.password;
        state.birthDate = payload.birthDate;
        state.bloodGroup = payload.bloodGroup;
        state.height = payload.height;
        state.weight = payload.weight;
        state.eyeColor = payload.eyeColor;
        state.hair = payload.hair;
        state.domain = payload.domain;
        state.ip = payload.ip;
        state.address = payload.address;
        state.macAddress = payload.macAddress;
        state.university = payload.university;
        state.bank = payload.bank;
        state.company = payload.company;
        state.ein = payload.ein;
        state.ssn = payload.ssn;
        state.userAgent = payload.userAgent;
      },
    ),
});

export const { setPartialUserData } = userSlice.actions;
export default PersistReducer(
  getPersistConfig(PERSIST_KEYS.USER_REDUX_SLICER),
  userSlice.reducer,
);
