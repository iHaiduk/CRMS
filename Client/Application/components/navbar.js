/**
 * Created by Igor Haiduk on 15.05.2016.
 */
'use strict';

import React from 'react';
import CSSModules from 'react-css-modules';
import Component from 'classes/Component'
import styles from 'style/components/_navigation.scss';
import { connect } from 'react-redux';

import actions from 'actions/index';













function withViewport(ComposedComponent) {
    return class Viewport extends React.Component {

        constructor() {
            super();
        }

        render() {
            console.log(222, ComposedComponent);
            return <ComposedComponent />;
        }

    };
}
function rrr(ee){
    console.log(1212, ee)
    return ee;
}

//@withViewport

@CSSModules(styles, {allowMultiple: true})
class Navigation extends Component() {

    constructor(props, context) {
        super(props, context)

        const self = this;

        /*setInterval(() => {
            self.props.dispatch(actions.addTodo('12345678'))
        }, 2000);*/

        this.state = {
            inputText: ''
        }
    }


    render() {
        console.log(this.props.todos)
        return <nav styleName="navigation" role="navigation">
                <div block="b-animals">
                    <div elem="cat" mod="size:big, color:red">Roleee</div>
                    <ul>

                        {
                            this.props.todos.map((todo) => {
                                return <li key={todo.id}>{todo.text}</li>
                            })
                        }

                    </ul>
                </div>
            </nav>;
    }
}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps)(Navigation);