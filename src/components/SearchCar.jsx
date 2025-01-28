

function SearchCar(){


    return (

        <div className="flex px-6">
        
        <input
        type="text"
        placeholder="Search cars..."
        className="w-full md:w-1/2 border border-gray-300 p-3 rounded-lg mb-6 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        disabled // Prevents input functionality
      />
 <label className="flex items-center gap-2 cursor-pointer ml-4">
        <input type="radio" name="filter" className="w-4 h-4" />
        <span className="text-gray-700">Show Premium Only</span>
      </label>
        
        </div>
    );
}

export default SearchCar;