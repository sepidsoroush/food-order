import { useReducer } from "react";
import CartContext from "./cart-context";

const initialState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.amount * action.item.price;
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.items[existingItemIndex];
    let updatedItems;
    if (existingItem) {
      const newItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = newItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

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
