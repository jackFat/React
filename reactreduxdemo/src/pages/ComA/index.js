import React, { Component } from 'react';
import { connect } from 'react-redux'
import './index.css'

class ComA extends Component {
  handleAddClick = () => {
    console.log(this.props)
    this.props.sendAddAction()
  }
  handleReduceClick = () => {
    this.props.sendReduceAction()
  }
  render() {
    return (
      <div className="comment-content">
      <button onClick={this.handleAddClick}>+</button>
      <button onClick={this.handleReduceClick}>-</button>
      </div>
    );
  } 
}

const mapDisPatchToPorps = (dispatch) => {
  return {
    sendAddAction: () => {
      dispatch({
        type: 'add_action'
      })
    },
    sendReduceAction: () => {
      dispatch({
        type: 'reduce_action'
      })
    }
  }
}

export default connect(null, mapDisPatchToPorps)(ComA)