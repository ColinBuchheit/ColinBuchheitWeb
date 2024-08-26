// src/store/reducers/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import reCaptchaReducer from '../reCaptchaSlice';

const rootReducer = combineReducers({
  reCaptcha: reCaptchaReducer,
  // Add other reducers here
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
