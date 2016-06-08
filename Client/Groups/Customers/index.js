/**
 * Created by Igor Haiduk on 15.05.2016.
 */
'use strict';

import React from "react";
import CSSModules from "react-css-modules";
import { Group } from "classes/Component";
import { connect } from "react-redux";
import { autobind } from "core-decorators";
import { bindActionCreators } from 'redux'

import actions from './actions';
import styles from "./css/index.scss";

import Table from 'components/Table';
import Pager from 'components/Pager';

@CSSModules(styles, { allowMultiple: true })
class Customers extends Group() {

    constructor(props, context) {
        super(props, context);

        this.childComponents = [ Table, Pager ];
    }

    render() {
        
        return this.generateTemplate();

    }
}

export default connect((state) => state, (dispatch) => { return { actions: bindActionCreators(actions, dispatch) } } )(Customers);