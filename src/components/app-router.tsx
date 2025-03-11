import { Routes, Route, Navigate } from 'react-router';
import { Home } from '../pages/home.tsx';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/*" element={<Navigate to="/" replace/>}/>
    </Routes>
  );
};
