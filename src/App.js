import React, { Component } from 'react'
import Giris from './pages/giris'
import Users from './component/users'
import Navbar from './component/navbar'
import './App.css';

 class App extends Component {

  render() {
    return (
      <div className="container">
        <Giris />
        <Users />
        <hr/>
        <Navbar title="User App"/>
    </div>
    )
  }
}

export default App

