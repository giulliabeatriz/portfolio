import React, { useState } from 'react'
import Navbar from './components/Navbar/navbar'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Sobre from './components/Pages/Sobre.jsx';
import Projetos from './components/Pages/Projetos.jsx';
import Home from './components/Pages/Home.jsx';
import Contato from './components/Pages/Contato.jsx';

function App(){
  
<BrowserRouter>
  <Router>
    <Navbar/>
    <main>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/sobre' element={<Sobre/>}></Route>    
        <Route path='/projetos' element={<Projetos/>}></Route>    
        <Route path='/contato' element={<Contato/>}></Route>    
        <Route path='/*' element={<div><h1>Not Found</h1></div>}></Route>    {/* qnd o usuário cair em uma página q n existe*/}
      </Routes>
    </main>
  </Router>
</BrowserRouter>

const [theme, setTheme] = useState('light');
return (
      <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme ={setTheme}/>
      </div>
    )
}

export default App
