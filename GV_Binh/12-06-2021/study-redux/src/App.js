import logo from './logo.svg';
import './App.css';
import User from './components/User';

// const initialState = {
//   count: 0,
//   name: 'React',
//   age: 20
// };

function App() {

  // const reducer = (state = initialState, action) => {
  //   const { type } = action
  //   switch (type) {
  //     case 'cong':
  //       return {...state, count: state.count + 1}
  //     default:
  //       return state
  //   }
  // }
  // let store = createStore(reducer)
  // store.subscribe(() => console.log(store.getState()))
  
  // const handleClick = () => {
  //   store.dispatch({ type: 'cong'})
  // }

  return (
    <div className="App">
     <button>+</button>
     <User />
    </div>
  );
}

export default App;
