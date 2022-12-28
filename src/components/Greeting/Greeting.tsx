import React from 'react';
import styles from './greeting.module.css';
import { greetingFormatting } from './helper';

type GreetingProps = {
  name: string;
};
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return (
    <div className={styles.wrapper} data-testid="greeting">
      {greetingFormatting(name, new Date().getHours())}
    </div>
  );
};

export default Greeting;
