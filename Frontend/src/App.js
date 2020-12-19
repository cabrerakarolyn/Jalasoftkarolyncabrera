import './assets/css/App.css';

import Formulario from './components/Formulario.js';


function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <h2>Lyrics Finder</h2> 
        </p>

        <section className="componentes">
          <Formulario/>
        </section>
      

      </header>
    </div>
  );
}

export default App;
