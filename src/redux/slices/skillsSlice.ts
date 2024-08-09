import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Skill = string;

const initialState: Skill[] = [];

const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    setSkills: (state, action: PayloadAction<Skill[]>) => action.payload,
  },
});

export const { setSkills } = skillsSlice.actions;
export default skillsSlice.reducer;


