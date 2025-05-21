import React from 'react';
import './App.css';
import Create from './components/Create';
import Navbar from './components/Navbar';
import Update from './components/Update';
import Read from './components/Read';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className='App'>
        {/* Barra de navegação */}
        <Navbar />

        {/* CRUD */}
        <Routes>
          <Route path='/' element={<Create />} />
          <Route path='/all' element={<Read />} />
          <Route path='/:id' element={<Update />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
