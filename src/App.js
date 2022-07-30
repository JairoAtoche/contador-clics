import './App.css';
import Contador from './componentes/Contador';
import Boton from './componentes/Boton';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);
  
  const agregarClick = () => {
    setNumClics(numClics + 1);
  }
  const reiniciarClick = () => {
    setNumClics(0);
  }

  return (
    <div className="App">
      <header className='header'>
        <h1 className='h1'>CONTADOR DE CLICS</h1>
      </header>
      <main className='main'>
        <Contador numero={numClics}/>
        <Boton nombre = 'agregar' estadoClick = {agregarClick} />
        <Boton nombre = 'reiniciar' estadoClick = {reiniciarClick} />
      </main> 
    </div>    
  );
}

export default App;
