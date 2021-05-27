import logo from './logo.svg';
import React, {useState} from 'react';
import './App.scss';
import Product from './components/Product';
import Count from './components/Counter';
import Counter from './components/Count';

// JSX
function App() {
  const [username, setUserName] = useState('HTML')
  return (
    <div className="App">
      <p>Tôi học lớp Reactjs</p>
      <p>React là một thư viện Javascript</p>
      <Product name={username}/>
      <Count />
      <Counter />
    </div>
  );
}

export default App;
