import React from 'react';
import './App.css';
import store from './store'
import { Provider } from 'react-redux'
import ComA from './pages/ComA'
import ComB from './pages/ComB'
import ComC from './pages/ComC'

class App extends React.Component {
  handleClick = () => {
    console.log(22222222)
  }
  render () {
    return (
      <Provider store={store}>
        <div className="App">
          <ComA />
          <ComB />
          <ComC handleClick={this.handleClick}/>
        </div>
      </Provider>
    );
  }
}

export default App;
