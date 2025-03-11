import { Routes, Route } from 'react-router';
import { Home } from '../pages/home.tsx';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  );
};
