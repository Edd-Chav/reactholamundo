import logo from './foto.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Este es mi primer hola mundo en REACT, soy Eduardo Chavez
        </p>
        <a
          className="App-link"
          href="https://utd.edu.mx/"
          target="_blank"
          rel="noopener noreferrer"
        >
          VISITAR PAGINA DE LA UTD
        </a>
      </header>
    </div>
  );
}

export default App;
