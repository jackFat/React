import React, { Component } from 'react';
import { connect } from 'react-redux'

class ComA extends Component {
  handleClick = () => {
    console.log(this.props)
    this.props.sendAction()
  }
  render() {
    return (
      <button onClick={this.handleClick}>+</button>
    );
  } 
}

const mapDisPatchToPorps = (dispatch) => {
  return {
    sendAction: () => {
      dispatch({
        type: 'add_action'
      })
    }
  }
}

export default connect(null, mapDisPatchToPorps)(ComA)