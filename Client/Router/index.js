/**
 * Created by user on 6/1/2016.
 */

import React from 'react';
import { Component } from "classes/Component";

import Navigation from 'components/Navigation'
import Customers from 'groups/Customers'
import Example from 'components/Example'


import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';


import Test from './app';



export default function(store){

    const history = syncHistoryWithStore(browserHistory, store);
    
    return class extends Component() {

        render() {

            return <Router history={history}>
                <Route path="/" component={Test}>
                    <Route path="foo" component={Navigation}/>
                    <Route path="bar" component={Example}/>
                    <Route path="table" component={Customers}/>
                </Route>
            </Router>;

        }
    }
    
}