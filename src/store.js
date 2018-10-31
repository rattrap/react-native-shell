import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import axiosMiddleware from 'redux-axios-middleware';
import client from './api';
import reducers from './reducers/index';
import notify from './notifications';

const middlewareConfig = {
    onError: ({ action, error, next, dispatch }) => {

        notify(error.message, "danger");

        let nextAction = {
            error,
            meta: {
                previousAction: action,
            },
        };
        
        if (action.types && action.types.length === 3) {
            nextAction.type = action.types[2];
        } else {
            nextAction.type = action.type + '_FAIL';
        }
        next(nextAction);
        return nextAction;
    }
};


export default createStore(reducers, applyMiddleware(
    axiosMiddleware(client, middlewareConfig),
    thunk,
    logger,
));
