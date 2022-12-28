import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NotificationState {
  type: NotificationsType;
  open: boolean;
  message: string;
}

enum NotificationsType {
  NULL = '',
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
}

const initialState: NotificationState = {
  type: NotificationsType.NULL,
  open: false,
  message: '',
};

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    resetNotifications: (state) => {
      state.type = NotificationsType.NULL;
      state.open = false;
      state.message = '';
    },
    setSuccessNotification: (state, action: PayloadAction<string>) => {
      state.type = NotificationsType.SUCCESS;
      state.open = true;
      state.message = action.payload;
    },
    setErrorNotification: (state, action: PayloadAction<string>) => {
      state.type = NotificationsType.ERROR;
      state.open = true;
      state.message = action.payload;
    },
    setInfoNotification: (state, action: PayloadAction<string>) => {
      state.type = NotificationsType.INFO;
      state.open = true;
      state.message = action.payload;
    },
    setWarningNotification: (state, action: PayloadAction<string>) => {
      state.type = NotificationsType.WARNING;
      state.open = true;
      state.message = action.payload;
    },
  },
});

export const {
  resetNotifications,
  setSuccessNotification,
  setErrorNotification,
  setInfoNotification,
  setWarningNotification,
} = notificationSlice.actions;
export default notificationSlice.reducer;
