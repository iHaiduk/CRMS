/**
 * Created by Igor Haiduk on 15.05.2016.
 */
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux'
import configureStore from 'root/store'
import Navigation from 'components/Navigation'

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

body.appendChild(rootElement);

ReactDOM.render(
    <Provider store={store}>
        <Navigation />
    </Provider>,
    rootElement
);
