import "./App.css";
import Product from "./components/Product.js";
import Counter from "./components/Counter.js";
import Bg from "./components/Bg.js";

function App() {
  return (
    <div className="App">
      <Product name={"Tai"} />
      <Counter />
      <Bg />
    </div>
  );
}

export default App;
