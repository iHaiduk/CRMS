/**
 * Created by Igor Haiduk on 15.05.2016.
 */
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux'
import configureStore from 'stores/index'
import Navigation from 'components/navbar'
import styles from 'style/main.scss';

const body          = document.body;
const rootElement   = document.createElement('div');

let initialState = {
    todos: [{
        id: 0,
        completed: false,
        text: 'Initial todo for demo purposes'
    }]
}

let store = configureStore(initialState)

body.appendChild(rootElement);

ReactDOM.render(
    <Provider store={store}>
        <div className={styles.test}>
            <Navigation />
            Hello world
        </div>
    </Provider>,
    rootElement
);

/*

// react-hot-loader 3 specific - rerender AppContainer
// in case of problems with react-router, check this issue:
// https://github.com/gaearon/react-hot-loader/issues/249
if (module.hot) {
    module.hot.accept('./containers/Root', () => {
        ReactDOM.render(
            <AppContainer />,
            rootElement
        );
    });
}*/


