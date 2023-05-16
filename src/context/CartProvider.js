import { useReducer } from "react";
import CartContext from "./cart-context";

const initialState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.amount * action.item.price;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return initialState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, initialState);
  const addItemsHandler = (item) => {
    dispatchCart({ type: "ADD", item: item });
  };
  const removeItemsHandler = (id) => {};

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
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
