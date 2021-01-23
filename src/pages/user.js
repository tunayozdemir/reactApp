import React, { Component } from 'react'
import PropTypes from 'prop-types'


class User extends Component {
  render() {

    // Destructing
    const {name, department, salary} = this.props
    return (
    // <form className="App">
    //   <input type="text"></input>
    //   <button>Gönder</button>
    // </form>

    <div>
      <ul>
        <li>İsim Soyisim: {name}</li>
        <li>Departman : {department}</li>
        <li>Maaş : {salary}</li>
      </ul>
    </div>
    )
  }
}

User.defaultProps = {
  name : "-Bilgi yok",
  department : "Bilgi yok",
  salary : "Bilgi yok"

}

// Propsların gerekli mi gereksiz mi, gönderilecekse hangi değer türünde olacağı belirtilir
User.propType = {
  name : PropTypes.string.isRequired,
  department : PropTypes.string.isRequired,
  salary : PropTypes.string.isRequired
}

export default User
