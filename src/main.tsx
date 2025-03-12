import { StrictMode } from 'react';
import { AppProvider } from './context/app-context.tsx';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router';
import { App } from './App.tsx';
import './assets/styles/global.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <AppProvider>
        <App/>
      </AppProvider>
    </HashRouter>
  </StrictMode>
);
