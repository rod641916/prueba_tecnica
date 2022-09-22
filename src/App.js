import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Inicio from './components/Inicio'
import Condiciones from './components/Condiciones'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element = {<Inicio></Inicio>}></Route>
            <Route path='/condicion:_id' element ={<Condiciones></Condiciones>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
