/**
 * Created by Igor Haiduk on 15.05.2016.
 */
'use strict';

import React from "react";
import CSSModules from "react-css-modules";
import Component from "classes/Component";
import { connect } from "react-redux";
import { autobind } from "core-decorators";
import { bindActionCreators } from 'redux'

import actions from './actions';


@CSSModules(styles, { allowMultiple: true })
class Navigation extends Component() {

    constructor(props, context) {
        super(props, context);
    }

    render() {

        return this.generateTemplate();

    }
}

export default connect((state) => state, (dispatch) => { return { actions: bindActionCreators(actions, dispatch) } } )(Navigation);