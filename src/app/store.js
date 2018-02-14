import {createStore, combineReducers, applyMiddleware} from "redux";
import createLogger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import addSocketListeners from "./socket/socketListeners";

import math from "./reducers/mathReducer";
import user from "./reducers/userReducer";

const store =  createStore(
    combineReducers({
         math,
         user
        }),
    {},
    applyMiddleware(createLogger, thunkMiddleware, promiseMiddleware())
);

addSocketListeners(store.dispatch, store.getState);

export default store;