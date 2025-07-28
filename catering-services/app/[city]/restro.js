import React from 'react';

function Restro({ restro, rating, cuisine, randomImage }) {
  return (
    <div className="w-full sm:w-[48%] md:w-[30%] lg:w-[25%] h-[30vh] rounded-2xl grid grid-rows-[70%_30%] mb-4">
      <div>
        <img
          src={randomImage}
          alt="Dish"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="flex flex-col px-2">
        <div className="text-base md:text-lg font-bold">
          {restro.tags.name ? restro.tags.name : "Indian Food"}
        </div>
        <div className="font-light text-sm md:text-base text-gray-600">
          {cuisine}
        </div>
        <div className="flex gap-1 items-center">
          <div>
            <img src="/star.png" alt="Rating Star" className="w-4 md:w-5" />
          </div>
          <div className="font-medium text-sm md:text-base text-gray-600">
            {rating}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Restro;