import React from 'react';
import { useKeyListener } from '../../hooks';

import styles from './form.module.css';

type FormProps = {
  onSubmit: () => void;
  children: React.ReactNode;
};

const Form: React.FC<FormProps> = ({ children, onSubmit }) => {
  useKeyListener('Enter', onSubmit);
  return (
    <div onSubmit={onSubmit} className={styles.wrapper}>
      {children}
    </div>
  );
};

export default Form;
