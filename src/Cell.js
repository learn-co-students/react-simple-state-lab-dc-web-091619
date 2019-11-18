import React from 'react';

export default class Cell extends React.Component {
    state = {color:this.props.value};
    render () {
        return (<div className='cell' onClick={this.changeColor} style={{backgroundColor:this.state.color}}></div>)
    }

    changeColor = () => {
        this.setState({color:'#333'})
    }
}
