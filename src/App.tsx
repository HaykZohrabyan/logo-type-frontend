import { AppRouter } from './components/app-router.tsx';
import { Header } from './components/ui/header/header.tsx';

export const App = () => {
  return (
    <main className="page-wrapper">
      <Header/>
      <AppRouter/>
    </main>
  );
};
