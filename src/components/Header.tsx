import { StoreItem } from "../data/storeItems";
import { Store } from "./Store";

export function Header({
  storeItemsCopy,
  getItemImagePath,
  increaseQuantity,
}: any) {
  return (
    <header id="store">
      <h1>Grocero</h1>
      <ul className="item-list store--item-list">
        {storeItemsCopy.map((storeItem: StoreItem) => (
          <Store
            key={storeItem.id}
            storeItem={storeItem}
            getItemImagePath={getItemImagePath}
            increaseQuantity={increaseQuantity}
          />
        ))}
      </ul>
    </header>
  );
}
