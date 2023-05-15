import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [updatedCart, setUpdatedCart] = useState([]);
  const addItem = (item) => {
    if (
      updatedCart.find((meal) => meal.id === item.id) &&
      updatedCart.find((meal) => meal.amount === item.amount)
    ) {
      console.log("duplicate");
    } else if (
      updatedCart.find((meal) => meal.id === item.id) &&
      updatedCart.find((meal) => meal.amount !== item.amount)
    ) {
      // const objIndex = updatedCart.findIndex((obj) => obj.id === item.id);
      // console.log(objIndex);
      // updatedCart[objIndex].amount = item.amount;
      // updatedCart[objIndex].price = item.price;
      console.log("updated");
      // console.log(updatedCart);
    } else {
      setUpdatedCart((prevState) => {
        return [...prevState, item];
      });

      console.log("added");
    }
  };
  console.log(updatedCart);

  return (
    <CartContext.Provider value={{ updatedCart, addItem }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
