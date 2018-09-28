import * as React from 'react'
import * as ReactDom from 'react-dom'


class App extends React.Component {
    /**
     * render
     */
    public render() {
        return 'Hello World!'
    }
}

ReactDom.render(<App />, document.getElementById('root'))
