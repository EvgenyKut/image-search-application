import { createSlice } from '@reduxjs/toolkit';
interface SearchFocusState {
  focus: boolean;
}

const initialState: SearchFocusState = {
  focus: false,
};

export const searchFocusSlice = createSlice({
  name: 'searchFocus',
  initialState,
  reducers: {
    onFocus: (state) => {
      state.focus = true;
    },
    onBlur: (state) => {
      state.focus = false;
    },
  },
});

export const { onFocus, onBlur } = searchFocusSlice.actions;
export default searchFocusSlice.reducer;
