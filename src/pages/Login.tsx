import { Button } from '@mui/material';
import React, { SyntheticEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Container } from '../components';
import { useAppDispatch, useAppSelector } from '../hooks/redux';

import { addName } from '../store/reducers/AuthSlice';
import { setSuccessNotification } from '../store/reducers/NotificationsSlice';
import { onBlur } from '../store/reducers/SearchFocusSlice';

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { isAuth } = useAppSelector((state) => state.authReducer);
  const [name, setName] = useState('');

  const handler = () => {
    if (name === '') return;
    localStorage.setItem('search-app-name', JSON.stringify(name));
    dispatch(addName({ name: name }));
    dispatch(onBlur());
    dispatch(setSuccessNotification(`Welcome, ${name}!`));
    navigate('/images');
  };

  useEffect(() => {
    if (isAuth) {
      navigate('/images');
    }
  }, [isAuth, navigate]);

  return (
    <Container>
      <Form onSubmit={handler}>
        <Input
          value={name}
          onChange={(e: SyntheticEvent) =>
            setName((e.target as HTMLTextAreaElement).value)
          }
          label="Username"
        />
        <Button
          onClick={handler}
          variant="contained"
          color="primary"
          type="submit"
        >
          Log in
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
