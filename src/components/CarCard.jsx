const CarCard = ({ car }) => {
    return (
      <div className=" border border-gray-300 p-6 rounded-lg shadow-md bg-white">
        
      
        <h2 className="text-xl font-bold mb-2">{car.name}</h2>
        <p className="text-gray-700"><strong>Brand:</strong> {car.brand}</p>
        <p className="text-gray-700"><strong>Year:</strong> {car.year}</p>
        <p className="text-gray-700"><strong>Price:</strong> ${car.price.toLocaleString()}</p>
        <p className="text-gray-700">
          <strong>Premium:</strong> <span className={car.premium ? "text-green-600" : "text-red-600"}>
            {car.premium ? "Yes" : "No"}
          </span>
        </p>
        
      </div>
    );
  };
  
  export default CarCard;
  