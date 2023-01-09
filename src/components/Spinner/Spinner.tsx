import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import styles from './spinner.module.css';

const Spinner = () => {
  return (
    <Backdrop open data-testid="spinner" className={styles.backDrop}>
      <CircularProgress className={styles.circularProgress} />
    </Backdrop>
  );
};

export default Spinner;
