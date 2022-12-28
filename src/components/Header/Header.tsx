import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Greeting } from '../../components';
import style from './header.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { resetName } from '../../store/reducers/AuthSlice';

type HeaderProps = { children: React.ReactNode };
const Header: React.FC<HeaderProps> = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { name } = useAppSelector((state) => state.authReducer);

  const logoutHandler = () => {
    dispatch(resetName());
    navigate('/');

    window.localStorage.setItem(
      'search-app-auth',
      JSON.stringify({ auth: false, name: '' }),
    );
  };

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <Greeting name={name} />
        {children}
      </div>
      {name && (
        <Button
          onClick={logoutHandler}
          variant="contained"
          color="primary"
          type="button"
        >
          Logout
        </Button>
      )}
    </div>
  );
};

export default Header;
