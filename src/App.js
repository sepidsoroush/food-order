import "./App.css";
import Header from "./components/Header";
import MealsSummary from "./components/MealsSummary";
import AvailableMeals from "./components/AvailableMeals";

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
