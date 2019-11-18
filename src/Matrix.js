import React, { Component } from 'react';
import Cell from './Cell.js'

export default class Matrix extends Component {
  
  genRow = (vals) => (
      vals.map(val => <Cell value={val} />) // replace me and render a cell component instead!
  )
  
  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )
  
  render() {
    // console.log(this)
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}
                
let colorRow = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
let arrayOfDefaults = new Array(10).fill(colorRow)  //array(10) creates ten arrays each filled with the first row

Matrix.defaultProps = { //has to be named defaultProps in order to pass the test
  values: arrayOfDefaults
}