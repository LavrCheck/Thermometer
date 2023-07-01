import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios';

function App() {
  const [Zna4, setZna4] = useState(15)

  useEffect(() => {
    axios.get('http://localhost:5000/temperature')
      .then((res) => {
        setZna4(res.data);
      })
  }, []);

  function Plus() {
    setZna4(Zna4 + 1)
    axios.post('http://localhost:5000/temperature', { temp: Zna4 + 1 });
  }

  function Minus() {
    setZna4(Zna4 - 1)
    axios.post('http://localhost:5000/temperature', { temp: Zna4 - 1 });
  }

  function Zadnik () {
    if(Zna4 >= 30) {
      return {backgroundColor: '#D21312'}
    } else if (Zna4 >= 15) {
      return {backgroundColor: '#FFD93D'}
    } else if (Zna4 >= 5) {
      return {backgroundColor: '#38E54D'}
    } else {
      return {backgroundColor: '#4FC0D0'}
    }
  }
  
  return (
    <div className="App">
      <div className='over'>
        <div className='thermometer' style={Zadnik()}>
          <h1 className='Zna4'>{Zna4}°</h1>
          <div className='Knopki'>
            <button className='plus' onClick={() => Plus()}>+</button>
            <button className='minus' onClick={() => Minus()}>−</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

