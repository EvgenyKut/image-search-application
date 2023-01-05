import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NotificationState {
  type: NotificationsType | null;
  open: boolean;
  message: string;
}

enum NotificationsType {
  INFO = 'info',
  SUCCESS = 'success',
  ERROR = 'error',
}

const initialState: NotificationState = {
  type: null,
  open: false,
  message: '',
};

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    resetNotifications: (state) => {
      state.type = null;
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
  },
});

export const {
  resetNotifications,
  setSuccessNotification,
  setErrorNotification,
  setInfoNotification,
} = notificationSlice.actions;
export default notificationSlice.reducer;
