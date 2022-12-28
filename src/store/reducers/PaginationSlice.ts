import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface PaginationState {
  page: number;
}

const initialState: PaginationState = {
  page: 1,
};

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    changeImagePage: (state, action: PayloadAction<{ page: number }>) => {
      state.page = action?.payload?.page;
    },
  },
});

export const { changeImagePage } = paginationSlice.actions;
export default paginationSlice.reducer;
