import { Button } from '@mui/material';
import React, { SyntheticEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Container } from '../components';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { addName } from '../store/reducers/AuthSlice';
import { setSuccessSnackBar } from '../store/reducers/SnackbarSlice';
import { onBlur } from '../store/reducers/SearchFocusSlice';
import { Dictionary } from '../constants/dictionary';
import { Routes } from '../constants/routes';
import Card from '@mui/material/Card';

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
    dispatch(setSuccessSnackBar(`Welcome, ${name}!`));
    navigate(Routes.IMAGES);
  };

  useEffect(() => {
    if (isAuth) {
      navigate(Routes.IMAGES);
    }
  }, [isAuth, navigate]);

  return (
    <Container>
      <Card variant="outlined">
        <Form onSubmit={handler}>
          <Input
            value={name}
            onChange={(e: SyntheticEvent) =>
              setName((e.target as HTMLTextAreaElement).value)
            }
            label={Dictionary.USERNAME_LABEL}
          />
          <Button
            onClick={handler}
            variant="outlined"
            color="primary"
            type="submit"
            size="medium"
          >
            {Dictionary.LOGIN_BTN}
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;
