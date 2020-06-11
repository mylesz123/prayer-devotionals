import devotionalReducer from './devotionalReducer';
import authenticationReducer from './authenticationReducer';
import { combineReducers } from 'redux';

//firestore
import { firestoreReducer } from 'redux-firestore'; // sync fs data with our state from connected component
import { firebaseReducer } from 'react-redux-firebase'; // connect auth data

/**
 * reducer is responsible for going into the data store and getting
 * the information that we need.
 */
const rootReducer = combineReducers({
    devotionals: devotionalReducer,
    authentication: authenticationReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;