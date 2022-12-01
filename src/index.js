import React from 'react';
import { createRoot } from 'react-dom/client';
import { configureStore } from './store';
import { Root } from './Root';

import './index.css';

const store = configureStore();

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Root store={store} />
  </React.StrictMode>
);
