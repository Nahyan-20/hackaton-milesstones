"use client";

import React, { useState } from 'react';

const Sidebar = () => {
  // State to manage the price selected by the user using the range slider
  const [price, setPrice] = useState(100);

  return (
    <div className="w-64 h-full bg-white p-4 shadow-lg ml-9 hidden sm:block">
      {/* Main Heading: Type */}
      <div className="mb-6 space-y-5">
        <h2 className="text-[#90A3BF] font-bold mb-4">Type</h2>
        {/* Looping through an array of car types to dynamically create checkboxes */}
        {[
          { label: 'Sport', count: 10 },
          { label: 'SUV', count: 10 },
          { label: 'MPV', count: 16 },
          { label: 'Sedan', count: 20 },
          { label: 'Coupe', count: 14 },
          { label: 'Hatchback', count: 14 },
        ].map((type) => (
          <div key={type.label} className="flex items-center mb-2">
            {/* Checkbox for each type of car */}
            <input
              type="checkbox"
              id={type.label}
              className="h-4 w-4 rounded border-gray-300 text-[#3563E9] focus:ring-[#3563E9]"
            />
            <label
              htmlFor={type.label}
              className="ml-2 text-sm text-gray-700"
            >
              {/* Displaying the label and count for each car type */}
              {type.label} <span className='text-[#90A3BF]'>({type.count}) </span>
            </label>
          </div>
        ))}
      </div>

      {/* Main Heading: Capacity */}
      <div className="mb-8 space-y-5 ">
        <h2 className="text-[#90A3BF] font-bold mb-4">Capacity</h2>
        {/* Looping through an array of capacities to dynamically create checkboxes */}
        {[
          { label: '2 Person', count: 10 },
          { label: '4 Person', count: 14 },
          { label: '6 Person', count: 12 },
          { label: '8 or More', count: 16 },
        ].map((capacity) => (
          <div key={capacity.label} className="flex items-center mb-2">
            {/* Checkbox for each capacity */}
            <input
              type="checkbox"
              id={capacity.label}
              className="h-4 w-4 rounded border-gray-300 text-[#3563E9] focus:ring-[#3563E9]"
            />
            <label
              htmlFor={capacity.label}
              className="ml-2 text-sm text-gray-700"
            >
              {/* Displaying the label and count for each capacity */}
              {capacity.label} <span className='text-[#90A3BF]'>({capacity.count}) </span>
            </label>
          </div>
        ))}
      </div>

      {/* Main Heading: Price */}
      <div className='mt-9'>
        <h2 className="text-[#90A3BF] font-bold mb-4">Price</h2>
        <div className="mb-2">
          {/* Range slider for selecting the price */}
          <input
            type="range"
            min="20"
            max="200"
            value={price}
            onChange={(e) => setPrice(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#3563E9]"
          />
        </div>
        {/* Displaying the selected maximum price */}
        <div className="text-sm text-gray-700">Max Price:  ${price}.00</div>
      </div>
    </div>
  );
};

export default Sidebar;

