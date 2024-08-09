import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type JobExperience = {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
};

const initialState: JobExperience[] = [];

const experienceSlice = createSlice({
  name: 'experience',
  initialState,
  reducers: {
    setExperience: (state, action: PayloadAction<JobExperience[]>) => action.payload,
  },
});

export const { setExperience } = experienceSlice.actions;
export default experienceSlice.reducer;


