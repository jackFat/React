import React, { Component } from 'react'

import store from '../store'

import { sendAction } from '../action'

class Home extends Component {
  handleClick = () => {
    const action = sendAction()
    store.dispatch(action)
  }

  componentDidMount() {
    store.subscribe(() => {
      console.log('subscribe',store.getState())
    })
  }

  render() {
    return (
      <button onClick={this.handleClick}>点我点我</button>
    )
  }
}

export default Home