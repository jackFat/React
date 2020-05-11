import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {

  };
}

class ComC extends Component {
  handleClick = () => {
    console.log(this.props)
    this.props.handleClick()
  }
  render() {
    return (
      <div onClick={this.handleClick}>
        这是C组件
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(ComC);