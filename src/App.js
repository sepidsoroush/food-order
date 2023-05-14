import "./App.css";
import Header from "./components/Layout/Header";
import MealsSummary from "./components/Meals/MealsSummary";
import AvailableMeals from "./components/Meals/AvailableMeals";
import CartProvider from "./context/CartProvider";

function App() {
  return (
    <CartProvider>
      <Header />
      <MealsSummary />
      <AvailableMeals />
    </CartProvider>
  );
}

export default App;
