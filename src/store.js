import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import rootReducer from './reducers';

const middleWare = [thunk];
const initalState = {};

const store = createStore(rootReducer, initalState, composeWithDevTools(applyMiddleware(...middleWare)));

export default store;