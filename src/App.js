import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';

import { connectGlobal } from './lib/store/'


import SimpleCmpA from './components/store02Cmp'
import SimpleCmpB from './components/useMethodStore'
import SimpleCmpC from './components/useStore2Too'
import Login from './components/login'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
        <SimpleCmpA />
        <SimpleCmpB />
        <SimpleCmpC />
      </div>
    );
  }
}


export default connectGlobal(
  ({userName}) => ({userName}),
  ({login, logout, hasLogin}) => ({login, logout, hasLogin})
)(App)
