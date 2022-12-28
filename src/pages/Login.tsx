import { Button } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Container } from '../components';
import { useAppDispatch } from '../hooks/redux';
import useUpdateStore from '../hooks/useUpdateStore';
import { addName } from '../store/reducers/AuthSlice';
import { setSuccessNotification } from '../store/reducers/NotificationsSlice';
import { onBlur } from '../store/reducers/SearchFocusSlice';

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');

  useUpdateStore('/images');

  const handler = () => {
    dispatch(addName({ name: name }));
    navigate('/images');
    dispatch(onBlur());
    dispatch(setSuccessNotification(`Welcome, ${name}!`));
  };

  return (
    <Container>
      <Form onSubmit={handler}>
        <Input
          value={name}
          onChange={(e: any) => setName(e.target.value)}
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
