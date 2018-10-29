export const FETCH_TODOS = 'FETCH_TODOS';

import { BASE_URL } from '../constants';

export function fetchTodos() {
    return function(dispatch) {
        dispatch({
            type: FETCH_TODOS
        });

        fetch(BASE_URL + '/todos').then((response) => {
            response.json().then(function(data) {
                dispatch({
                    type: FETCH_TODOS,
                    payload: data
                });
            });
        }).catch((error) => {
            dispatch({
                type: FETCH_TODOS,
                error: error
            });
        });
    }
}