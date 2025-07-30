import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Sobre from './components/Pages/Sobre';
import Projetos from './components/Pages/Projetos';
import Contato from './components/Pages/Contato';

function App() {
   const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

 useEffect(() => {  
     document.documentElement.classList.toggle('dark', theme === 'dark');
     localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="min-h-screen font-sans dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <Navbar theme={theme} setTheme={setTheme} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<div><h1>Página não encontrada</h1></div>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
