import "./App.css";
import Counter from "./Counter";
import Product from "./Product";
import AddProduct from "./components/addProduct";

function App() {
  return (
    <div className="App">
      <Counter />
      {/* <Product /> */}
      <AddProduct />
    </div>
  );
}

export default App;
