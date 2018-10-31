import { FETCH_TODOS } from '../actions/todos';

let todoState = {
    todos: [],
    errors: [],
};

export default todoReducer = (state = todoState, action) => {
    switch (action.type) {
        case FETCH_TODOS:
            return state;
        case FETCH_TODOS + '_SUCCESS':
            state = Object.assign({}, state, {
                todos: action.payload.data
            });
            return state;
        case FETCH_TODOS + '_FAIL':
            
            return state;
        default:
            return state;
    }
};