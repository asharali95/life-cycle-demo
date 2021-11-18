import React from 'react';

class LifeCycle extends React.Component {
    constructor(){
        super()
        console.log("constructor")
    }
    componentDidMount(){
        console.log("componentDidMount")
    }
    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
    componentWillUnmount(){
        console.log("componentWillUnmount")
    }
    render = () =>{
        console.log("render")
        return(
            <div>
                <h1>{this.props.content}</h1>
            </div>
        )
    }
}

export default LifeCycle