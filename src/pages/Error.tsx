import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../components';
import NotFound from '../assets/404.gif';

const Error = () => {
  const navigate = useNavigate();
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
