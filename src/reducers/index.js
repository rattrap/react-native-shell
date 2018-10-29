import { combineReducers } from 'redux';
import { FETCH_TODOS } from '../actions';

let todoState = {
    todos: [],
    errors: [],
};

todoReducer = (state = todoState, action) => {
    switch (action.type) {
        case FETCH_TODOS:
            if (action.payload) {
                state = Object.assign({}, state, {
                    todos: action.payload
                });
            } else if (action.error) {
                state = Object.assign({}, state, {
                    errors: [action.error]
                });
            }
            return state;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    todoReducer,
})

export default rootReducer;
