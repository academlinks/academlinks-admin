import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TesterT {
  id: string;
  count: number;
}

const RegistrationSlice = createSlice({
  name: "registration",
  initialState: {
    testCount: 13,
  },
  reducers: {
    tester(state, { payload }: PayloadAction<TesterT>) {},
  },
});

export default RegistrationSlice.reducer;
export const { tester } = RegistrationSlice.actions;
