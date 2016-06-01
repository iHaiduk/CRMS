/**
 * Created by Igor Haiduk on 15.05.2016.
 */
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from 'root/store'

import Rout from 'router'

const body          = document.body;
const rootElement   = document.createElement('div');

let initialState = {
    todos: [{
        id: 0,
        completed: false,
        text: 'Initial todo for demo purposes'
    }]
};

let store = configureStore(initialState);
let Router = Rout(store);

body.appendChild(rootElement);

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
    rootElement
);
