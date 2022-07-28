import { CartItem } from "./CartItem";
import { Total } from "./Total";

export function CartList() {
  return (
    <main id="cart">
      <h2>Your Cart</h2>

      <div className="cart--item-list-container">
        <ul className="item-list cart--item-list">
          <CartItem />
        </ul>
      </div>

      <Total />
    </main>
  );
}
