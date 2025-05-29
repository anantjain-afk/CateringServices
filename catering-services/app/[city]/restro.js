import React from 'react'

function Restro({restro , rating , cuisine , randomImage}) {
  return (
    <div className="  w-[25%] h-[30vh]  rounded-2xl grid grid-rows-[80%_20%] mb-4">
                <div>
                  <img
                    src={randomImage}
                    alt="Dish"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="  flex flex-col px-2">
                  <div className=" text-l font-bold ">
                    {restro.tags.name ? restro.tags.name : "indian Food"}
                  </div>
                  <div className="font-light text-gray-600">{cuisine}</div>
                  <div className="flex gap-1 items-center">
                    <div>
                      <img src="/star.png" alt="" className="w-5" />
                    </div>
                    <div className="font-medium text-gray-600">{rating}</div>
                  </div>
                </div>
              </div>
  )
}

export default Restro