import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './store';

interface PrivateRouteProps {
  element: JSX.Element;
  path: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, path }) => {
  const user = useSelector((state: RootState) => state.user.user);

  return user ? <Route path={path} element={element} /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
