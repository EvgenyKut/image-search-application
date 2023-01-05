import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { resetNotifications } from '../../store/reducers/NotificationsSlice';

const Notification = () => {
  const dispatch = useAppDispatch();

  const { message, type, open } = useAppSelector(
    (state) => state.notificationReducer,
  );

  const handleClose = () => {
    dispatch(resetNotifications());
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <Alert
        onClose={handleClose}
        severity={type || 'info'}
        sx={{ width: '100%' }}
      >
        {message || ''}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
