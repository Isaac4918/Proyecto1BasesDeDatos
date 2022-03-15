import React from 'react';
import './assets/css/App.css';

//Import componentes
import InicioSesion from './components/inicioSesion';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <InicioSesion/>
        </section>
      </header>
    </div>
  );
}

export default App;
