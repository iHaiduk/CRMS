/**
 * Created by Igor Haiduk on 22.05.2016.
 */
'use strict';
import { List, Map } from 'immutable';

function getId(todos) {
    return todos.reduce((maxId, todo) => {
            return Math.max(todo.id, maxId)
        }, -1) + 1
}

let todoReducer = function(todos = List(), action) {
    switch (action.type) {
        case 'ADD_TODO':
            return todos.push(Map({   // Every switch/case must always return either immutable
            id: getId(todos),          //  or primitive (like in activeFilter) state data
            text: action.text,      //  We let Immutable decide if data has changed or not
            isCompleted: false
        }));
        /*case 'COMPLETE_TODO':
            return todos.map((todo) => {
                return todo.id === action.id ?
                    Object.assign({}, todo, {completed: !todo.completed}) : todo
            });
        case 'DELETE_TODO':
            return todos.filter((todo) => {
                return todo.id !== action.id
            });*/
        default:
            return todos;
    }
};

export default todoReducer