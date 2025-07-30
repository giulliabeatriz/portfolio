import React from 'react'
import './navbar.css'
import profile from '../../assets/navbar/profile.jpg'
import ti_light from '../../assets/navbar/toggle-icon-light.png'
import ti_dark from '../../assets/navbar/toggle-icon-dark.png'
import { NavLink } from 'react-router-dom';

const Navbar = ({theme, setTheme}) => {

  const toggle_mode = ()=> {
    theme == 'light' ? setTheme('dark') : setTheme('light');
    }

  const baseLinkClasses = "font-sans uppercase text-lg transition-colors duration-300";
  const activeLinkClasses = "text-primary font-bold";
  const inactiveLinkClasses = "text-secondary-dark dark:text-secondary-light hover:text-primary-dark dark:hover:text-primary-light";

  return (
    <div className='py-2 flex items-center justify-center m-2'>
      <nav className='flex flex-row items-center justify-between h-25 rounded-xl p-3 px-5 w-full bg-secondary-light dark:bg-secondary-dark shadow-md'>

        <span className='flex items-center gap-3'>
          <img src={profile} alt="Foto de perfil" className='profile w-12 h-12 rounded-full' />
          <p className="m-0 text-primary-dark dark:text-white font-heading text-lg hidden sm:block">Giullia Beatriz</p>
        </span>

        <ul className="flex items-center font-sans justify-center gap-4 sm:gap-8 m-0">
          <li><NavLink to="/" className={({ isActive }) => `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}>Home</NavLink></li>
          <li><NavLink to="/sobre" className={({ isActive }) => `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}>Sobre</NavLink></li>
          <li><NavLink to="/projetos" className={({ isActive }) => `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}>Projetos</NavLink></li>
          <li><NavLink to="/contato" className={({ isActive }) => `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}>Contato</NavLink></li>
        </ul>

        <button onClick={toggle_mode} aria-label='Alternar tema' className='toggle-icon rounded-full m-2 border-2 border-secondary dark:border-secondary-light'>
          <img src={theme === 'light' ? ti_light : ti_dark} alt="Ícone de alternância de tema" className='m-1.5 rounded-circle' />
        </button>

      </nav>
    </div>
  )
}

export default Navbar
