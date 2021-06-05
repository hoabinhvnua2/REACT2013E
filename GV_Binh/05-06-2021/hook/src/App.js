import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Product from './components/Product';
import User from './components/User';

function App() {


  return (
    <div className="App">
      <Product />
      <User />
    </div>
  );
}

export default App;
