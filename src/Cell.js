import React, { Component } from 'react';
import { debug } from 'util';

class Cell extends Component{
    constructor(props) {
        // debugger 
        super() 
        this.state = {
            color: props.value
        } 
      }

    render(){
          console.log('hi')
        //   debugger 
          return(
              <div className='cell' onClick={this.changeTile} style ={{backgroundColor: this.state.color}}></div>
          )
    }

    changeTile = () => {
            this.setState({color: '#333'})
    }
}

export default Cell