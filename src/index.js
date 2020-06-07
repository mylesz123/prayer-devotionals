import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import "./Components/index.css";

import { 
  createStore, 
  applyMiddleware, 
  compose // allows us to add multiple data store enhancers
} from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './data-store/reducers/rootReducer';
import thunk from 'redux-thunk'; // store enhancer to allow us to intercept dispatches, morph info, and resend
import { 
  reduxFirestore, // store enhancer that gives getFirestore info on which database to connect to
  getFirestore 
} from 'redux-firestore';
import { 
  reactReduxFirebase, // store enhancer that gives getFirebase info on which database to connect to
  getFirebase 
} from 'react-redux-firebase';
import firebaseConfig from './config/firebase-config';

const store = createStore(
  rootReducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase }))
  ),
  reduxFirestore(firebaseConfig),
  reactReduxFirebase(firebaseConfig)
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);
