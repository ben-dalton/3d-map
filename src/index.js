import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css/animate.css';

import './assets/styles/App.css';
import mapApp from './reducers/map-reducer';
import App from './components/app';

let store = createStore(
  mapApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

