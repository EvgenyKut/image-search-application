import React from 'react';
import styles from './container.module.css';

type ContainerProps = { children: React.ReactNode };
const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className={styles.container} data-testid='container'>{children}</div>;
};

export default Container;
