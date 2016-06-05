/**
 * Created by Igor Haiduk on 15.05.2016.
 */
'use strict';

import React, { PropTypes } from 'react'
import CSSModules from "react-css-modules";
import Component from "classes/Component";
import { connect } from "react-redux";
import { autobind } from "core-decorators";
import { bindActionCreators } from 'redux'

import actions from './actions';
import styles from "style/components/_navigation.scss";

import { Link, browserHistory } from 'react-router'


@connect(state => state, dispatch => { return { actions: bindActionCreators(actions, dispatch) } } )
@CSSModules(styles, { allowMultiple: true })
class Navigation extends Component() {

    constructor(props, context) {
        super(props, context);
        
        this.childComponents = [ Link ];
        this.state = {}
    }

    componentDidMount(){
        let self = this;
        console.log(self)
        /*setInterval(() =>
        {
            self.props.actions.addTodo('Text: ' + (parseInt(this.props.todos.size) + 1));
        }, 3000);*/
    }

    render() {

        return this.generateTemplate();

    }
}

/*Navigation.propTypes = {
    childComponents: PropTypes.array.isRequired
};*/

export default Navigation;