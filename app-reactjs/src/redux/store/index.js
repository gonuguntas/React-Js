import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "../reducers/index";
import { fetchGithubData } from '../actions/index';

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(fetchGithubData());


export default store;
