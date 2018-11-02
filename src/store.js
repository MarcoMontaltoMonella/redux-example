import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// N.B. when importing index.js, you dont have to specify the file (see below)
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;

// Video continue from 53:15! 