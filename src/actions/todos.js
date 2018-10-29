export const FETCH_TODOS = 'FETCH_TODOS';

export function fetchTodos() {
    return {
        type: FETCH_TODOS,
        payload: {
          request: {
            url: `/todos`,
          }
        }
    }
}