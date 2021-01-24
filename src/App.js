import React, { Component } from 'react'
import Giris from './pages/giris'
import User from './pages/user'
import Users from './component/users'
import Navbar from './component/navbar'
import './App.css';

 class App extends Component {

  state = {
    users :[
      {
        id:1,
        name :"Tunay Özdemir",
        salary :"5000",
        department:"Bilişim"
      },
      {
        id:2,
        name :"Hayriye Özdemir",
        salary :"6000",
        department:"Yönetim"
      },
      {
        id:3,
        name :"Asya Özdemir",
        salary :"1000",
        department:"Tekniker"
      }
    ]
  }

  deleteUser = (id) =>{
    this.setState({
      users : this.state.users.filter( user => id !== user.id)
    })
  }

  render() {
    return (
      <div className="container">
        <Giris />
        <Users deleteUser={this.deleteUser} users={this.state.users}/>
        <hr/>
        <Navbar title="User App"/>
    </div>
    )
  }
}

export default App

