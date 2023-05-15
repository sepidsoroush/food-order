import "./App.css";
import Header from "./components/Layout/Header";
import MealsSummary from "./components/Meals/MealsSummary";
import AvailableMeals from "./components/Meals/AvailableMeals";
import CartProvider from "./context/CartProvider";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

function App() {
  const [showCart, setShowCart] = useState(false);
  const openCartHandler = () => {
    setShowCart(true);
  };
  const closeCartHandler = () => {
    setShowCart(false);
  };
  return (
    <CartProvider>
      {showCart && <Cart onCloseCart={closeCartHandler} />}
      <Header onOpenCart={openCartHandler} />
      <MealsSummary />
      <AvailableMeals />
    </CartProvider>
  );
}

export default App;
