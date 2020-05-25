import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './data-store/reducers/rootReducer';
import thunk from 'redux-thunk';

import "./Components/index.css";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);
