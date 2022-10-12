import React from 'react'
import {Link, NavLink }  from 'react-router-dom'

const Navbar = () => {
  return (
    <div  className='navbar navbar-dark bg-dark mb-5'>

      <Link className='navbar-brand'   to ="/"   >  APP  POKER
      </Link>
      
      <div className="d-flex">
        <NavLink className="btn  btn-dark mr-2"    to="/" exact> inicio</NavLink>
        <NavLink className="btn  btn-dark mr-2"    to="/login" exact> Login</NavLink>
        <botton  className="btn btn-dark mr-2">  Cerrar Sesion</botton>

              
        
      </div>
      
      
      </div>
  )
}

export default Navbar;
