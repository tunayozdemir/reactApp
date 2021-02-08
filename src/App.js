import React, { Component } from 'react'
import Giris from './pages/giris'
import Users from './component/users'
import Navbar from './component/navbar'
import './App.css';
import AddUser from './component/AddUser'

 class App extends Component {

  render() {
    return (
      <div className="container">
        <Navbar title="User App"/>
        <hr/>
        <AddUser/>
        <hr/>
        <Users/>

    </div>
    )
  }
}

export default App

