/**
 * Created by Igor Haiduk on 22.05.2016.
 */
'use strict';

function getId(state) {
    return state.todos.reduce((maxId, todo) => {
            return Math.max(todo.id, maxId)
        }, -1) + 1
}


export default function reducer(state, actions) {

    switch (actions.type) {

        case 'ADD_TODO':

            return Object.assign({}, state, {
                todos: [...state.todos, {
                    text: actions.text,
                    completed: false,
                    id: getId(state)
                }]
            });

        default:
            return state;

    }

}