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

//firebase
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import {
  reduxFirestore,
  getFirestore, // store enhancer that gives getFirestore info on which database to connect to
  createFirestoreInstance
} from "redux-firestore";
import firebaseConfig, { extraConfigProps } from './config/firebase-config';
import firebase from 'firebase/app';
// end firebase

const middleWares = [
  thunk.withExtraArgument({ getFirestore, getFirebase })
];

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleWares),
    reduxFirestore(firebaseConfig)
  )
);

const rrfProps = {
  firebase,
  config: firebaseConfig,
  // for additional props to be added to state
  config: extraConfigProps,
  dispatch: store.dispatch,
  createFirestoreInstance
};

firebase.auth().onAuthStateChanged(() => {
  ReactDOM.render(
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
    ,
    document.getElementById('root')
  );  
});
