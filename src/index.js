import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
<<<<<<< HEAD
import { Provider } from 'react-redux'; /* code change */
=======
import { Provider } from 'react-redux';
>>>>>>> 9af6cc2823643d6fdce1b0db4ea51c21cd043e59
import shoppingListItemReducer from './reducers/shoppingListItemReducer';
import App from './App';
import './index.css';
 
const store = createStore(
  shoppingListItemReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); /* code change */
 
ReactDOM.render(
  <Provider store={store}>
    <App />
<<<<<<< HEAD
  </Provider>, /* code change */
=======
  </Provider>,
>>>>>>> 9af6cc2823643d6fdce1b0db4ea51c21cd043e59
  document.getElementById('root')
);