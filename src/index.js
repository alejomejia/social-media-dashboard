import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider } from 'easy-peasy';

// Importing from store folder
import STORE from './store';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={STORE}>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
