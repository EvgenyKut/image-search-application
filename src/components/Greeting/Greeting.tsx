import React from 'react';
import styles from './greeting.module.css';
import { greetingFormatting } from './helper';
import Avatar from '@mui/material/Avatar';
import { useAppSelector } from '../../hooks';
import { capitalizeFirstLetter } from '../../helpers/helper';

type GreetingProps = {
  name: string;
};
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  const { isAuth } = useAppSelector((state) => state.authReducer);
  return (
    <div className={styles.wrapper} data-testid="greeting">
      {isAuth && (
        <Avatar className={styles.avatar}>
          {capitalizeFirstLetter(name.slice(0, 1))}
        </Avatar>
      )}
      {greetingFormatting(name, new Date().getHours())}
    </div>
  );
};

export default Greeting;
