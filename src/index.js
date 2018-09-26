import React from 'react';
import { render } from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import rootReducer from './reducers';

/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
const store = createStore(
  rootReducer,
  compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

module.hot.accept();
