import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/reset.css';
import { GlobalStyles } from 'styles/GlobalStyles';

import App from 'components/App';
import { persistor, store } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/project_blackout">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
          <ToastContainer autoClose={1000} theme="colored" />
          <GlobalStyles />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
