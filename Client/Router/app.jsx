/**
 * Created by user on 6/1/2016.
 */
import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'

class App extends Component {
    render() {
        return (
            <div>
                <h1>Users</h1>
                <header>
                    Links:
                    {' '}
                    <Link to="/">Home</Link>
                    {' '}
                    <Link to="/foo">Foo</Link>
                    {' '}
                    <Link to="/bar">Bar</Link>
                </header>
                <div>
                    <button onClick={() => browserHistory.push('/foo')}>Go to /foo</button>
                </div>
                <div className="detail">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default App;