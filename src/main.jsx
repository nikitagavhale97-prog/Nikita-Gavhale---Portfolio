import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import TagManager from 'react-gtm-module';

window.dataLayer = window.dataLayer || [];


TagManager.initialize({
  gtmId: "GTM-KKNZ7F56",
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);