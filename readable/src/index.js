import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'

import {BrowserRouter} from 'react-router-dom';

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(reducer, reduxDevTools)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>, document.getElementById('root'));

// console.log(store.getState())

registerServiceWorker();
