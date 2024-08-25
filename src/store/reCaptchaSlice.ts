// src/store/reCaptchaSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ReCaptchaState {
  token: string | null;
}

const initialState: ReCaptchaState = {
  token: null,
};

const reCaptchaSlice = createSlice({
  name: 'reCaptcha',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    resetToken: (state) => {
      state.token = null;
    },
  },
});

export const { setToken, resetToken } = reCaptchaSlice.actions;

export default reCaptchaSlice.reducer;
