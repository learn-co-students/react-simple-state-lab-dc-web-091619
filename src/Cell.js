import React from 'react';

class Cell extends React.Component {
    constructor (props){
        super();
        this.state = {color: props.value}
    }

    changeColor = () => {
        this.setState({
            color: '#333'
        })
        
    }

    render(){
        console.log(this.state.color)
        return (
            <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.changeColor}></div>
        )
    }
}

export default Cell