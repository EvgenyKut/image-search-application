import React from 'react';
import { useNavigate } from 'react-router-dom';
import useUpdateStore from '../hooks/useUpdateStore';
import { Container } from '../components';
import NotFound from '../assets/404.gif';

const Error = () => {
  const navigate = useNavigate();
  useUpdateStore();

  return (
    <Container>
      <img
        src={NotFound}
        alt="404..."
        onClick={() => navigate('/')}
        style={{ maxWidth: '100%', cursor: 'pointer' }}
      />
    </Container>
  );
};
export default Error;
