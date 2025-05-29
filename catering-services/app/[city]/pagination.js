"use client";
import React from "react";
import Restro from "./restro";
import { useState } from "react";
function Pagination({ data }) {
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const restaurantsPerPage = 6; // Restaurants shown per page

  const indexOfLastRestaurant = currentPage * restaurantsPerPage; // Last item index
  const indexOfFirstRestaurant = indexOfLastRestaurant - restaurantsPerPage; // First item index
  const currentRestaurants = data.slice(
    indexOfFirstRestaurant,
    indexOfLastRestaurant
  ); // Slice for current page

  const getRandomImage = () => {
    const totalImages = 35;
    const randomIndex = Math.floor(Math.random() * totalImages) + 1;
    return `/food-images /${randomIndex}.jpg`;
  };

  const getRandomRating = () => {
    return Math.round((Math.random() * 4 + 1) * 10) / 10;
  };

  function generateCuisineTags() {
    const cuisineCategories = [
      "North Indian",
      "South Indian",
      "Chinese",
      "Mughlai",
      "Street Food",
      "Snacks",
      "Sweets",
      "Gujarati",
      "Bengali",
      "Rajasthani",
    ];

    // Choose 2 to 4 unique random items
    const numTags = Math.floor(Math.random() * 3) + 2; // 2 to 4
    const shuffled = cuisineCategories.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, numTags);

    return selected.join(", ");
  }

  const totalPages = Math.ceil(data.length / restaurantsPerPage); // Total number of pages

  return (
    <>
      <div className="flex flex-col gap-7">
        <div className=" w-full flex flex-wrap  p-5 gap-10 justify-center">
          {currentRestaurants.map((restro, index) => {
            const randomImage = getRandomImage();
            const rating = getRandomRating();
            const cuisine = generateCuisineTags();
            return (
              <>
                <Restro
                  restro={restro}
                  key={index}
                  rating={rating}
                  cuisine={cuisine}
                  randomImage={randomImage}
                />
              </>
            );
          })}
        </div>
        <div className="w-full flex justify-center mt-4 gap-4 mb-8">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-orange-500 text-white rounded disabled:opacity-60"
          >
            Prev
          </button>
          <span className="px-4 py-2 font-medium">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-orange-500 text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Pagination;
