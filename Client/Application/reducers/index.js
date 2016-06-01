/**
 * Created by Igor Haiduk on 22.05.2016.
 */
'use strict';

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import todoReducer from 'components/Navigation/reducers'

const rootReducer = combineReducers({
    routing: routerReducer,
    todos: todoReducer
});

export default rootReducer