import {createStore, combineReducers, applyMiddleware} from "redux";
import createLogger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";

import startSocket, {socketMiddleware} from './socket/socketMiddleware';

import math from "./reducers/mathReducer";
import user from "./reducers/userReducer";

const store =  createStore(
    combineReducers({
         math,
         user
        }),
    {},
    applyMiddleware(createLogger, thunkMiddleware, promiseMiddleware(), socketMiddleware)
);

startSocket(store);

export default store;