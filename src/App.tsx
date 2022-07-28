import { useState } from "react";
import "./App.css";
import { CartList } from "./components/CartList";
import { Header } from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">

      <Header />

      <CartList />
    </div>
  );
}

export default App;
