import React, { Component } from 'react';
import { connect } from 'react-redux'

class ComB extends Component {
  render() {
    return (
    <div>{this.props.CountReducer.count}</div>
    );
  }
}

const mapStateToProps = state => {
  console.log('ComB', state)
  return state
}

export default connect(mapStateToProps)(ComB)