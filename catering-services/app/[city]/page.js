import React from "react";
import cityToLocation from "../components/searchLogic";
import Restro from "./restro";
async function city({ params }) {
  const { city } = params;
  const data = await cityToLocation(city.trim());
  // console.log(data);
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


  // writing the code for pagination 
   
  return (
    <>
      <div className="bg-gray-100 w-full flex flex-wrap  p-5 gap-10 justify-center">
        {data.map((restro) => {
          const randomImage = getRandomImage();
          const rating = getRandomRating();
          const cuisine = generateCuisineTags();
          return (
            <>
              <Restro restro = {restro} rating = {rating} cuisine = {cuisine} randomImage = {randomImage}/>

            </>
          );
        })}
      </div>
    </>
  );
}

export default city;
