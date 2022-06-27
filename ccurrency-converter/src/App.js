import React, { useEffect } from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow';



function App() {
  const BASE_URL = "http://api.coinlayer.com/api/live?access_key=bf6f6764458c4979104360f51084e211&symbols=BTC,ETH"
  return (
    <>
      <h1>Convert</h1>
     <CurrencyRow/>
      <div className='equals'>=</div>
      <CurrencyRow/>
    </>
  );
}

export default App;
