import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// N.B. when importing index.js, you dont have to specify the file (see below)
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
);

export default store;