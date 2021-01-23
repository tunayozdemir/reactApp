import React from 'react'
import PropTypes from 'prop-types'


const Navbar = (props) => {

 
  return(
    <div>
      <h4>{props.title}</h4>
    </div>
  )
}

Navbar.defaultProps =  {
  title : "Bilgi yok.."
}

// Propsların gerekli mi gereksiz mi, gönderilecekse hangi değer türünde olacağı belirtilir
Navbar.propTypes ={
  title : PropTypes.string.isRequired
}

export default Navbar;