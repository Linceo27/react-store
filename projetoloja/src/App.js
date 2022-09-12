import React from 'react';
import Inicial from './pages/Inicial';
import CadastroProduto from './pages/CadastroProduto';
import Calcados from '../src/pages/PagesCategorias/Calcados'
import Roupas from '../src/pages/PagesCategorias/Roupas'
import Artesanato from '../src/pages/PagesCategorias/Artesanato'
import Cozinha from '../src/pages/PagesCategorias/Cozinha'


import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';

function App() {
  //alert("Esse site foi criado por Nicole Gomes para fins educacionais")
  return (
      <Router>
        <Routes>
          <Route path = '/' element={<Inicial/>}/>
          <Route path = '/CadastroProduto' element={<CadastroProduto/>}/>
          <Route path = '/Artesanato' element={<Artesanato/>}/>
          <Route path = '/Calcados' element={<Calcados/>}/>
          <Route path = '/Cozinha' element={<Cozinha/>}/>
          <Route path = '/Roupas' element={<Roupas/>}/>

        </Routes>
      </Router>
    
  );
}

export default App;
