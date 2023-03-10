
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Final from './componentes/Final';
import Ganado from './componentes/Ganado';
import Juego from './componentes/Juego';
import Portada from './componentes/Portada';
import Provider from './contexto/Provideer';

function App() {
 
 
  return (
      <Provider>
    <Routes>
        <Route path= "/" element={<Portada/>}/>
        <Route path= "Juego/" element={<Juego/>}/>
        <Route path= "Final/" element={<Final/>}/>
        <Route path= "Ganado/" element={<Ganado/>}/>
    </Routes>
    </Provider>
  );

}

export default App;
