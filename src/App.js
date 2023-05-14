import "./App.css";
import Header from "./components/Layout/Header";
import MealsSummary from "./components/Meals/MealsSummary";
import AvailableMeals from "./components/Meals/AvailableMeals";

function App() {
  return (
    <div className="App">
      <Header />
      <MealsSummary />
      <AvailableMeals />
    </div>
  );
}

export default App;
