/**
 * Created by Igor Haiduk on 22.05.2016.
 */
'use strict';

import { combineReducers } from 'redux'
import todoReducer from 'components/Navigation/reducers'

const rootReducer = combineReducers({
    todos: todoReducer
});

export default rootReducer