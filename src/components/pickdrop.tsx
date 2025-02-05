import { IoSwapVerticalOutline } from "react-icons/io5";
import { CiCircleChevUp } from "react-icons/ci";

const PickDropComponent = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between w-full p-6 bg-[#FFFFFF] sm:px-16 mt-4 overflow-x-hidden">
    {/* Pick-up Section */}
    <div className="flex flex-col w-full sm:w-2/5 px-4 mb-4 sm:mb-0 -translate-x-3 sm:-translate-x-0">
      <div className="flex items-center space-x-2 mb-4">
        <CiCircleChevUp className="text-blue-500 text-2xl" />
        <h2 className="text-xl sm:text-2xl text-black">Pick-up</h2>
      </div>
      <div className="flex flex-row items-center space-x-2 w-full sm:gap-x-6">
        <div className="flex flex-col w-1/3">
          <label htmlFor="pickup-location" className="text-black font-bold">
            Locations
          </label>
          <select
            id="pickup-location"
            className="mt-2 p-2 border border-gray-300 rounded-md max-w-full"
          >
            <option value="" disabled selected>
              Select your location
            </option>
            <option>Location 1</option>
            <option>Location 2</option>
          </select>
        </div>
  
        <div className="flex flex-col w-1/3">
          <label htmlFor="pickup-date" className="text-black font-bold">
            Date
          </label>
          <input
            type="date"
            id="pickup-date"
            className="mt-2 p-2 border border-gray-300 rounded-md max-w-full"
          />
        </div>
  
        <div className="flex flex-col w-1/3">
          <label htmlFor="pickup-time" className="text-black font-bold">
            Time
          </label>
          <input
            type="time"
            id="pickup-time"
            className="mt-2 p-2 border border-gray-300 rounded-md max-w-full"
          />
        </div>
      </div>
    </div>
  
    {/* Swap Icon */}
    <div className="flex justify-center items-center bg-[#3563E9] text-white  w-16 h-16 rounded-lg  mb-2 sm:mb-0 ">
      <IoSwapVerticalOutline size={36} />
    </div>
  
    {/* Drop-off Section */}
    <div className="flex flex-col w-full sm:w-2/5 pl-0 pr-4 sm:-translate-x-9">
      <div className="flex items-center space-x-2 mb-4">
        <CiCircleChevUp className="text-blue-500 text-2xl" />
        <h2 className="text-xl sm:text-2xl text-black">Drop-off</h2>
      </div>
      <div className="flex flex-row items-center space-x-2 w-full sm:gap-x-6">
        <div className="flex flex-col w-1/3">
          <label htmlFor="dropoff-location" className="text-black font-bold">
            Locations
          </label>
          <select
            id="dropoff-location"
            className="mt-2 p-2 border border-gray-300 rounded-md max-w-full"
          >
            <option value="" disabled selected>
              Select your location
            </option>
            <option>Location A</option>
            <option>Location B</option>
          </select>
        </div>
  
        <div className="flex flex-col w-1/3">
          <label htmlFor="dropoff-date" className="text-black font-bold">
            Date
          </label>
          <input
            type="date"
            id="dropoff-date"
            className="mt-2 p-2 border border-gray-300 rounded-md max-w-full"
          />
        </div>
  
        <div className="flex flex-col w-1/3">
          <label htmlFor="dropoff-time" className="text-black font-bold">
            Time
          </label>
          <input
            type="time"
            id="dropoff-time"
            className="mt-2 p-2 border border-gray-300 rounded-md max-w-full"
          />
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default PickDropComponent;
