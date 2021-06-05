import React, {useState} from 'react';
import './App.scss';
// import Product from './components/Product';
// import Count from './components/Counter';
// import Counter from './components/Count';
import Tasks from './components/Tasks';

// JSX
function App() {
  // const [username, setUserName] = useState('REACT')
  // const [loading, setLoading] = useState(true)
  return (
    <div className="App">
      {/* <p>Tôi học lớp Reactjs</p>
      <p>React là một thư viện Javascript</p>
      <button onClick={() => setLoading(!loading)}>{loading ? 'Ẩn' : 'Hiển thị'}</button>
      <Product />
      <Count />
      {
        loading && <Counter />
      } */}
      <Tasks />

    </div>
  );
}

export default App;
