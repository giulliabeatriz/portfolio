import React from 'react'
import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import profile from '../../assets/profile.jpg'
import ti_light from '../../assets/toggle-icon-light.png'
import ti_dark from '../../assets/toggle-icon-dark.png'


const Navbar = ({theme, setTheme}) => {

  const toggle_mode = ()=> {
    theme == 'light' ? setTheme('dark') : setTheme('light');
    console.log('clicked');
  }

  return (
    <div className='py-2 align-items-center'>
      <nav className='navbar d-flex flex-row align-items-center justify-content-between height-25 rounded p-2 px-lg-5 col-12'>

          <span className='d-flex border col-lg-2'>
            <img src={profile} alt="Foto de perfil" className='profile rounded-circle'/>
            <p className="px-2 font-weight-bold">Giullia Beatriz</p>
          </span>

            <ul className="text-center border col-lg-4">
              <li>Home</li>
              <li>Sobre</li>
              <li>Projetos</li>
              <li>Contato</li>
            </ul>

            <img onClick={()=>{toggle_mode()}} src={theme == 'light' ? ti_light : ti_dark} alt="" className='toggle-icon rounded-circle p-2 border'/>

      </nav>       
    </div>  
  )
}

export default Navbar
