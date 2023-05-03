import { createSlice } from '@reduxjs/toolkit';

const filterSearchValue = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterSearchValue,
  reducers: {
    setFilterSearchValue(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setFilterSearchValue } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
