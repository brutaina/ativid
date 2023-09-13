import React from 'react';
import './App.css';
import Cabecalho from './componentes/Cabecalho';
import Rodapes from './componentes/Rodapes';
import Conteudo, { OlaMundo } from './componentes/Conteudo';

function App() {
  OlaMundo();

  return (
    <>
      <Cabecalho logo="estrela.jpg" titulo="Favoritões" subtitulo="The worst gerenciador de favoritos da internet Brasileira!!!" />
      <Conteudo> </Conteudo>
      <Rodapes />
    </>
  );
}

export default App;
