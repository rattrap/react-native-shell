import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import axiosMiddleware from 'redux-axios-middleware';
import client from './api';
import reducers from './reducers/index';

export default createStore(reducers, applyMiddleware(
    axiosMiddleware(client,),
    thunk,
    logger,
));
