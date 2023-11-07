import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app';
import { Header } from './features/ui/header';
import { Footer } from './features/ui/footer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Header/>
    <App />
    <Footer/>
  </StrictMode>
);
