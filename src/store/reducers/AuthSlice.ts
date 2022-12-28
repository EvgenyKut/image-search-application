import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface AuthState {
  name: string;
  isAuth: boolean;
}

const initialState: AuthState = {
  name: '',
  isAuth: false,
};

export const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    addName: (state, action: PayloadAction<{ name: string }>) => {
      state.name = action?.payload?.name;
      state.isAuth = true;
    },
    resetName: (state) => {
      state.name = '';
      state.isAuth = false;
    },
  },
});

export const { addName, resetName } = authSlice.actions;
export default authSlice.reducer;
