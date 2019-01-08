import React from 'react'
import Matrix from './Matrix.js'

class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.value
        }
    }

    handleClick = () => {
        this.setState({
            color: '#333'
        })
    }

    render () {
        return (
            <div className="cell" onClick={this.handleClick} style={{backgroundColor: this.state.color}} >
            </div>
        )
    }
}

export default Cell