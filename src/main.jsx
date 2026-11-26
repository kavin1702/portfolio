import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

const root = document.getElementById('root');
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// The build pre-renders the page into #root, so we "hydrate" (attach React to the
// existing HTML) instead of rendering from scratch. In `npm run dev` it is empty.
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
