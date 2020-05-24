import devotionalReducer from './devotionalReducer';
import authenticationReducer from './authenticationReducer';
import { combineReducers } from 'redux';

/**
 * reducer is responsible for going into the data store and getting
 * the information that we need.
 */
const rootReducer = combineReducers({
    devotionals: devotionalReducer,
    authentication: authenticationReducer,
});

export default rootReducer;