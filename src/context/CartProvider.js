import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemsHandler = () => {};
  const removeItemsHandler = () => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemsHandler,
    removeItem: removeItemsHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
