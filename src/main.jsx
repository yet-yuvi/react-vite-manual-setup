import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { StrictMode } from 'react';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
