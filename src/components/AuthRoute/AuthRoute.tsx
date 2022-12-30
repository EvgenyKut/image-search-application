import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';

const AuthRoute = ({
  children,
  baseUrl,
}: {
  children: ReactElement;
  baseUrl: string;
}) => {
  const { isAuth } = useAppSelector((state) => state.authReducer);
  return isAuth ? children : <Navigate to={baseUrl} />;
};

export default AuthRoute;
