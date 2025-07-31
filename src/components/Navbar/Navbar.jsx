import React, { useState } from 'react';
import './navbar.css';
import profile from '../../assets/navbar/profile.jpg';
import ti_light from '../../assets/navbar/toggle-icon-light.png';
import ti_dark from '../../assets/navbar/toggle-icon-dark.png';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'; 

const Navbar = ({ theme, setTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggle_mode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  const baseLinkClasses = "font-sans uppercase text-lg transition-colors duration-300";
  const activeLinkClasses = "text-primary font-bold";
  const inactiveLinkClasses = "text-secondary-dark dark:text-secondary-light hover:text-primary-dark dark:hover:text-primary-light";

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
      <div 
      onClick={() => setIsMenuOpen(!isMenuOpen)} 
      className='py-2 flex items-center justify-center m-2 
      transition-all duration-600 ease-in-out'>
      <nav className='relative flex flex-row items-center justify-between h-25 rounded-xl p-3 px-5 w-full bg-secondary-light dark:bg-secondary-dark shadow-md'>
        <span className='flex items-center  gap-3'>
          <img src={profile} alt="Foto de perfil" className='profile w-12 h-12 rounded-full' />
          <p className="m-0 text-primary-dark dark:text-white font-heading text-lg sm:block">Giullia Beatriz</p>
        </span>

        <ul className="hidden md:flex items-center font-sans justify-center gap-4 sm:gap-8 m-0">
          <li><NavLink to="/" className={({ isActive }) => `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}>Home</NavLink></li>
          <li><NavLink to="/sobre" className={({ isActive }) => `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}>Sobre</NavLink></li>
          <li><NavLink to="/projetos" className={({ isActive }) => `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}>Projetos</NavLink></li>
          <li><NavLink to="/contato" className={({ isActive }) => `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}>Contato</NavLink></li>        </ul>

        <button onClick={toggle_mode} aria-label='Alternar tema' className='hidden md:block ...'>
          <img src={theme === 'light' ? ti_light : ti_dark} alt="Ícone de alternância de tema" className='w-7 h-7 m-1 rounded-circle' />
        </button>

        <button 
          className="md:hidden text-primary-dark dark:text-white z-30"
          aria-label="Abrir menu"
        >
          <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} className="h-7 w-7" />
        </button>

        {/*"media querie da navbar (responsividade)"*/}
        <div 
          className={`
            absolute top-0 left-0 w-full rounded bg-secondary-light dark:bg-secondary-dark md:hidden shadow-xl z-20
            overflow-hidden 
            transition-all duration-550 ease-in-out
            ${isMenuOpen ? 'max-h-screen py-5' : 'max-h-0 py-0'}
          `}
        >
          <ul className="flex flex-col items-center gap-6 pt-10">
            <li><NavLink to="/" onClick={handleLinkClick} className={({ isActive }) => `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}>Home</NavLink></li>
            <li><NavLink to="/sobre" onClick={handleLinkClick} className={({ isActive }) => `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}>Sobre</NavLink></li>
            <li><NavLink to="/projetos" onClick={handleLinkClick} className={({ isActive }) => `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}>Projetos</NavLink></li>
            <li><NavLink to="/contato" onClick={handleLinkClick} className={({ isActive }) => `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}>Contato</NavLink></li>
            <li>
              <button onClick={toggle_mode} aria-label='Alternar tema' className='toggle-icon rounded-full mb-2 border-2 border-secondary dark:border-secondary-light'>
                <img src={theme === 'light' ? ti_light : ti_dark} alt="Ícone de alternância de tema" className='w-7 h-7 m-1 rounded-circle' />
              </button>
            </li>
          </ul>
        </div>
        
      </nav>
    </div>
  )
}

export default Navbar;