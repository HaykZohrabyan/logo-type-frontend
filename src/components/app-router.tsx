import { Routes, Route, Navigate } from 'react-router';
import { Home } from '../pages/home.tsx';

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        path={process.env.NODE_ENV === 'production' ? '/logo-type-frontend' : '/'}
        element={<Home/>}
      />
      <Route
        path={process.env.NODE_ENV === 'production' ? '/logo-type-frontend/*' : '/*'}
        element={<Navigate to="/" replace/>}
      />
    </Routes>
  );
};
