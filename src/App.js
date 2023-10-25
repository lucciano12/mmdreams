import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './routes/Inicio';
import Contacto from './routes/Contacto';
import Productos from './routes/Productos';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        {/* <Route path="/Todos" element={<Todos />} /> */}
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Productos" element={<Productos />} />
      
      </Routes>
    </Router>
  );
}

export default App;
