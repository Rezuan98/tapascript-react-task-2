import CarList from "./components/CarList";
import Header from "./components/Header";
import Searchbar from "./components/SearchCar";

const carsData = [
  { id: 1, name: "Luxury Sedan", brand: "Mercedes", year: 2023, price: 80000, premium: true },
  { id: 2, name: "Family SUV", brand: "Toyota", year: 2022, price: 45000, premium: false },
  { id: 3, name: "Sports Car", brand: "Porsche", year: 2023, price: 120000, premium: true },
  { id: 4, name: "Electric Hatchback", brand: "Nissan", year: 2022, price: 35000, premium: false },
  { id: 5, name: "Luxury SUV", brand: "BMW", year: 2023, price: 90000, premium: true },
];

function App() {
  return (
    <div className="p-8">

      <Header/>
      <Searchbar/>
     
      <CarList cars={carsData} />
    </div>
  );
}

export default App;
