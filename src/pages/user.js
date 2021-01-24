import React, { Component } from 'react'
import PropTypes from 'prop-types'


class User extends Component {

  constructor(props){
    super(props);
    this.state={
      isVisable : false
    }
  }

  // Eğer istenen bilgiler props ta yoksa aşağıdaki değerler gelecektir.
  static defaultProps = {
      name : "Bilgi yok",
      department : "Bilgi yok",
      salary : "Bilgi yok"
  }

  // isVisable false ise true, true ise false olacak
  onClickEvent = (e) => {
    this.setState({
      isVisable : !this.state.isVisable
    })

  }


  render() {
    
    // Destructing
    const {name, department, salary} = this.props
    const {isVisable}=this.state
    return (
    // <form className="App">
    //   <input type="text"></input>
    //   <button>Gönder</button>
    // </form>

    // <div>
    //   <ul>
    //     <li>İsim Soyisim: {name} <i className="far fa-trash-alt"></i></li>
    //     <li>Departman : {department}</li>
    //     <li>Maaş : {salary}</li>
    //   </ul>
    // </div>


    <div className="col-md-8 mb-4">
      <div className="card">
        <div className="card-header d-flex justify-content-between">
        <h4 className="d-inline" style={{cursor:"pointer"}}  onClick={this.onClickEvent.bind(this,34)}>{name}</h4>
        <i className="far fa-trash-alt" style={{cursor:"pointer"}}></i>
        </div>

        {
          isVisable ? 
        <div className="card-body">
          <p className="card-text">Maaş : {salary}</p>
          <p className="card-text">Maaş : {department}</p>
          {/* <p>State : {this.state.deneme}</p> */}
        </div> : null
        } 
      </div>
    </div>
    )
  }
}

// Eğer istenen bilgiler props ta yoksa aşağıdaki değerler gelecektir.
// Diğer bir yöntem: Yukarıda static defaultProps = {} olarak tanımlanabilir.
// User.defaultProps = {
//   name : "-Bilgi yok",
//   department : "Bilgi yok",
//   salary : "Bilgi yok"
// }

// Propsların gerekli mi gereksiz mi, gönderilecekse hangi değer türünde olacağı belirtilir
User.propType = {
  name : PropTypes.string.isRequired,
  department : PropTypes.string.isRequired,
  salary : PropTypes.string.isRequired
}

export default User
