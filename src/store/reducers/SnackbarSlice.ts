import { createSlice, PayloadAction } from '@reduxjs/toolkit';

enum SnackBarType {
  INFO = 'info',
  SUCCESS = 'success',
  ERROR = 'error',
}
interface SnackBarState {
  type: SnackBarType | null;
  notification: string;
  isOpen: boolean;
}

const initialState: SnackBarState = {
  type: null,
  notification: '',
  isOpen: false,
};

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    resetSnackBarData: (state) => {
      state.type = null;
      state.isOpen = false;
      state.notification = '';
    },
    setSuccessSnackBar: (state, action: PayloadAction<string>) => {
      state.type = SnackBarType.SUCCESS;
      state.isOpen = true;
      state.notification = action.payload;
    },
    setErrorSnackBar: (state, action: PayloadAction<string>) => {
      state.type = SnackBarType.ERROR;
      state.isOpen = true;
      state.notification = action.payload;
    },
    setInfoSnackBar: (state, action: PayloadAction<string>) => {
      state.type = SnackBarType.INFO;
      state.isOpen = true;
      state.notification = action.payload;
    },
  },
});

export const {
  resetSnackBarData,
  setSuccessSnackBar,
  setErrorSnackBar,
  setInfoSnackBar,
} = notificationSlice.actions;
export default notificationSlice.reducer;
