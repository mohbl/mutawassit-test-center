import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './redux/store';
import App from './App';
import theme from './util/theme';
import { ChakraProvider } from '@chakra-ui/react';

const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <App />
          </Router>
        </PersistGate>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
