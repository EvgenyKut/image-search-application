import React, { SyntheticEvent } from 'react';
import { useKeyListener } from '../../hooks';

import styles from './form.module.css';

type FormProps = {
  onSubmit: (e: SyntheticEvent) => void;
  children: React.ReactNode;
};

const Form: React.FC<FormProps> = ({ children, onSubmit }) => {
  useKeyListener('Enter', onSubmit);
  return (
    <div onSubmit={onSubmit} className={styles.wrapper} data-testid="form">
      {children}
    </div>
  );
};

export default Form;
