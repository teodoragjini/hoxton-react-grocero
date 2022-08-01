import { useState } from "react";
import "./App.css";

import { CartList } from "./components/CartList";
import { Header } from "./components/Header";
import initialStoreItems, { StoreItem } from "./data/storeItems";

function App() {
  const [storeItems, setStoreItems] = useState(initialStoreItems);

  const storeItemsCopy = structuredClone(storeItems);

  function getItemImagePath(item: StoreItem) {
    let id = String(item.id).padStart(3, "0");
    return `assets/icons/${id}-${item.name}.svg`;
  }

  function getCartItems() {
    return storeItemsCopy.filter((item: StoreItem) => item.inCard > 0);
  }

  function getTotal() {
    return storeItems.map((item: StoreItem) => item.price * item.inCard);
  }

  function increaseQuantity(item: StoreItem) {
    if (item.stock === 0) return;
    item.inCard++;
    item.stock--;
    setStoreItems(storeItemsCopy);
  }

  function decreaseQuantity(item: StoreItem) {
    if (item.inCard > 0) {
      item.inCard--;
      item.stock++;
      setStoreItems(storeItemsCopy);
    }
  }

  return (
    <div className="App">
      <Header
        storeItemsCopy={storeItemsCopy}
        getItemImagePath={getItemImagePath}
        increaseQuantity={increaseQuantity}
      />

      <CartList
        getCartItems={getCartItems()}
        getItemImagePath={getItemImagePath}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        getTotal={getTotal}
      />
    </div>
  );
}

export default App;
