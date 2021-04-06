import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

import Header from "./Components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  // Connects the store to our application
  <Provider store={store}>
      <Header/>
      <App />
  </Provider>,
  document.getElementById('root')
);