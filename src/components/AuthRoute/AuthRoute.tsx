import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';

const AuthRoute = ({ children }: { children: ReactElement }) => {
  const { isAuth } = useAppSelector((state) => state.authReducer);
  return isAuth ? children : <Navigate to="/" />;
};

export default AuthRoute;
