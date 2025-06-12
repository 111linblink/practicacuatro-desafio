import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';

function Home() {
  return <h1>Bienvenidos a la Página de Inicio de Linette</h1>;
}

function About() {
  return <h2>Acerca de Nosotros</h2>;
}

function App() {
  return (
<BrowserRouter basename="/practicacuatro-desafio">
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>
  </Routes>
</BrowserRouter>
  );
}

export default App;
