import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Routes from './Routes';

/* Janith Gamage On - 13/09/2021  */
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers/FinanceReducers';

/* Janith Gamage On - 13/09/2021  */
const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store} >
    <React.StrictMode>
      <Routes />
      {/* <App /> */}
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
