import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import HomeContainer from './containers/HomeContainer'

class App extends Component {
    public render() {
        return (
            <BrowserRouter>
                <Route exact path='/' component={ HomeContainer } />
            </BrowserRouter>
        )
    }
}

ReactDom.render(<App />, document.getElementById('root'))
