import { combineReducers } from 'redux';
import data from './githubReducer';
import dynamicformReducer from './dynamicformReducer';

export default combineReducers({
    data: data,
    dynamicformReducer:dynamicformReducer
});