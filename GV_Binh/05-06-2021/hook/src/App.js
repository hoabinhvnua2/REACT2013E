import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Product from './components/Product';
import User from './components/User';
import { CountProvider } from './common/CountContext';
import Count from './components/Count';

function App() {


  return (
    <div className="App">
      <CountProvider>
        <Count />
      </CountProvider>
    </div>
  );
}

export default App;
