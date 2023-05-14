import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItem = () => {};

  return (
    <CartContext.Provider value={addItem}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
