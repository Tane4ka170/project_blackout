import 'antd/dist/reset.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { persistor, store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import App from 'components/App';
import { GlobalStyles } from 'styles/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter basename="/project_blackout">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <ToastContainer autoClose={1000} theme="colored" />
        <GlobalStyles />
      </PersistGate>
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);
