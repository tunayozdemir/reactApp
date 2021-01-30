import React, { Component } from 'react'

const UserContext = React.createContext();
// Bu conetxt 'in uygulamayı sarmalaması için usercontent ten gelen provider ları kulanabilmemiz için bize bir consumer verilir
// Provider (Sağlayıcı),
// Consumer (Tüketici)


export class UserProvider extends Component {

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

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;