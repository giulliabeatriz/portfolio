import React from 'react'
import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <div>
     <nav className="navbar">

      <img src=".\src\assets\profile.jpg" alt="Foto de perfil" className='profile'/>

      <ul className='row'>
        <li>Home</li>
        <li>Sobre</li>
        <li>Projetos</li>
        <li>Contato</li>
      </ul>

      <img src="" alt="" className='toggle-icon' />
     </nav>
    </div>
  )
}

export default Navbar
