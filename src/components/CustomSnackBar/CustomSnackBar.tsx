import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { resetSnackBarData } from '../../store/reducers/SnackbarSlice';

const CustomSnackBar = () => {
  const dispatch = useAppDispatch();

  const { notification, type, isOpen } = useAppSelector(
    (state) => state.snackBarReducer,
  );

  const handleClose = () => {
    dispatch(resetSnackBarData());
  };

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={4500}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      data-testid="snackbar"
    >
      <Alert
        onClose={handleClose}
        severity={type || 'info'}
        sx={{ width: '100%' }}
      >
        {notification || ''}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackBar;
