import React from 'react';

export default class Cell extends React.Component {
  constructor(props) {
    super();
    this.state = {
      color: props.value
    }
  }

  render() {
    return <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.clicked}></div>
  }

  clicked = () => {
    this.setState({
      color: '#333'
    })
  }
  // have to use a arrow function to bind 'this' to the function
}