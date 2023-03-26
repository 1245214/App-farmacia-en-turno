import React from 'react'
import Headers from './Components/Header'
import Card from './Components/Card1'
import './index.css';
import TurnosFarmacias from './Components/MiApi'
import Card1 from './Components/Card'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <section className='container-grandfather' >
      <article className='container-father'>
        <header>
          <Headers />
        </header>
        <section className='container-son'>
          <Card1 />
          <Card />
        </section>
        <main className='container' >
          <div className='container-flex'>
            <TurnosFarmacias title='Consulta Turnos de Farmacias' />
          </div>
        </main>
      </article>
    </section>
  );
}

export default App;
