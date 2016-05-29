/**
 * Created by Igor Haiduk on 22.05.2016.
 */
'use strict';

import { createStore } from 'redux';
import reducer from 'reducers/index';

export default function configureStore(initialState = { todos: [] }) {
    return createStore(reducer, initialState)
}