import React, { Component } from 'react'

export class Test extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    updateCount(){
        this.setState(prevState=>({
            count: prevState.count + 6
        }))
    }
    render() {
        return (
            <div>
                <h1>I have counted - {this.state.count}</h1>
                <button onClick={()=>this.updateCount()}>How Many Counts?</button>
            </div>
        )
    }
}

export default Test

