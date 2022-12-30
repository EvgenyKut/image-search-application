import React from 'react';
import { useAppSelector } from '../../hooks';
import useKeyListener from '../../hooks/useKeyListener';
import useLocalStorageState from '../../hooks/useLocalStorageState';
import { ReactComponent as Moon } from '../../assets/Moon.svg';
import { ReactComponent as Sun } from '../../assets/Sun.svg';
import styles from './themeToggler.module.css';

const ThemeToggler = () => {
  const { focus } = useAppSelector((state) => state.searchFocusReducer);
  const [theme, setTheme] = useLocalStorageState('search-app-theme', 'light');
  const nextTheme = theme === 'light' ? 'dark' : 'light';

  const setNextTheme = () => setTheme(nextTheme);
  useKeyListener('KeyF', setNextTheme, focus);

  React.useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <div
      onClick={setNextTheme}
      className={styles.wrapper}
      data-testid="theme-toggler"
    >
      <div data-testid="dark" className={styles.darkTheme}>
        <Moon />
      </div>
      <div data-testid="light" className={styles.lightTheme}>
        <Sun />
      </div>
    </div>
  );
};

export default ThemeToggler;
