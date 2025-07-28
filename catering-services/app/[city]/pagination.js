"use client";
import React, { useState, useMemo } from "react";
import Restro from "./restro";

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

function generateCuisineTags() {
  const cuisineCategoriesCopy = [...cuisineCategories];
  const numTags = Math.floor(Math.random() * 3) + 2;
  const shuffled = cuisineCategoriesCopy.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numTags);
}

function Pagination({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCuisine, setSelectedCuisine] = useState("");
  const restaurantsPerPage = 6;

  const getRandomRating = () => {
    return Math.round((Math.random() * 4 + 1) * 10) / 10;
  };

  const enrichedData = useMemo(() => {
    const totalImages = 35;
    const imageIndices = Array.from({ length: data.length }, (_, i) => (i % totalImages) + 1);
    const shuffledImages = imageIndices.sort(() => 0.5 - Math.random());

    return data.map((restro, index) => ({
      ...restro,
      cuisineTags: generateCuisineTags(),
      randomImage: `/food-images /${shuffledImages[index]}.jpg`,
      randomRating: getRandomRating(),
    }));
  }, [data]);

  const filteredData = selectedCuisine
    ? enrichedData.filter((restro) =>
        restro.cuisineTags.some((cuisine) =>
          cuisine.toLowerCase().includes(selectedCuisine.toLowerCase())
        )
      )
    : enrichedData;

  const indexOfLastRestaurant = currentPage * restaurantsPerPage;
  const indexOfFirstRestaurant = indexOfLastRestaurant - restaurantsPerPage;
  const currentRestaurants = filteredData.slice(
    indexOfFirstRestaurant,
    indexOfLastRestaurant
  );

  const totalPages = Math.ceil(filteredData.length / restaurantsPerPage);

  return (
    <>
      <div className="flex flex-col gap-7">
        <div className="flex flex-wrap gap-2 justify-center mt-6 px-4 mb-6">
          {cuisineCategories.map((cuisine) => (
            <button
              key={cuisine}
              onClick={() => setSelectedCuisine(cuisine)}
              className={`px-4 py-2 rounded-full border ${
                selectedCuisine === cuisine
                  ? "bg-orange-500 text-white"
                  : "bg-white text-gray-800 hover:bg-orange-100"
              }`}
            >
              {cuisine}
            </button>
          ))}
          <button
            onClick={() => setSelectedCuisine("")}
            className={`px-4 py-2 rounded-full border ${
              selectedCuisine === ""
                ? "bg-orange-500 text-white"
                : "bg-white text-gray-800 hover:bg-orange-100"
            }`}
          >
            All
          </button>
        </div>
        <div className=" w-full flex flex-wrap  p-5 gap-10 justify-center">
          {currentRestaurants.length >0 ? currentRestaurants.map((restro, index) => {
            const randomImage = restro.randomImage;
            const rating = restro.randomRating;
            const cuisineArray = restro.cuisineTags;
            const cuisine = cuisineArray.join(", ");
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
          }) : <div className="w-full text-center text-gray-500">Sorry, we couldn't find any restaurants matching your search.</div>}
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
