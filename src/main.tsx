import { StrictMode } from 'react';
import { AppProvider } from './context/app-context.tsx';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { App } from './App.tsx';
import './styles/global.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AppProvider>
        <App/>
      </AppProvider>
    </BrowserRouter>
  </StrictMode>
);
