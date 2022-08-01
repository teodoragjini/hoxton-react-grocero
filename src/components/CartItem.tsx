export function CartItem({
  getItemImagePath,
  storeItem,
  decreaseQuantity,
  increaseQuantity,
}: any) {
  return (
    <li>
      <img
        className="cart--item-icon"
        src={getItemImagePath(storeItem)}
        alt="beetroot"
      />
      <p>{storeItem.name}</p>
      <button
        className="quantity-btn remove-btn center"
        onClick={() => {
          decreaseQuantity(storeItem);
        }}
      >
        -
      </button>

      <span className="quantity-text center">{storeItem.inCard}</span>
      <button
        className="quantity-btn add-btn center"
        onClick={() => {
          increaseQuantity(storeItem);
        }}
      >
        +
      </button>
    </li>
  );
}
