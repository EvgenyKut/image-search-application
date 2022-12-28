import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ModalOpen = () => {
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  return (
    <Modal
      // open={open}
      open
      onClose={() => {}}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {/* <Box sx={style}> */}
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Welcome to our App!
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          We have interesting features
          <ul>
            <li>
              You can switch on light/dark theme by click on icon or press on
              "F"{' '}
            </li>
            <li>Use "Enter" for confirmation search your images</li>
            <li>
              For pagination you can use click by buttons or by left/right
              arrows on keyboard
            </li>
            <li>
              If you will refresh the app, we will save your name, theme and
              authorization.
            </li>
          </ul>
        </Typography>
      </Box>
    </Modal>
  );
};

export default ModalOpen;
