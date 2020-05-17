import devotionalReducer from './devotionalReducer';
import authenticationReducer from './authenticationReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    devotional: devotionalReducer,
    authentication: authenticationReducer,
});

export default rootReducer;