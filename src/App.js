
import './App.css';
import Boton from './components/Boton';
import Counter from './components/Counter.js';
import logo from './images/logo.png'
import {useState} from 'react'; 


function App() {

  const [numClicks, setNumClicks ] = useState(0);

  const clickButton = () => {
    setNumClicks(numClicks + 1);
  }

  const resetButton = () => {
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className='container-logo'>
        <img
        className='logo-counter'
        src={logo}
        alt='Logo para el contador'/>
      </div>
      <div  className="container-counter">
        {/* pasamos como props la variable para pasar su valor */}
        <Counter clickNumber = {numClicks} />  
        <Boton
          texto='Click'
          isClickButton={true}
          clickManagement={clickButton}/>

        <Boton
          texto='Reset'
          isClickButton={false}
          clickManagement={resetButton}/>
   

      </div>
    </div>
  );
}

export default App;
