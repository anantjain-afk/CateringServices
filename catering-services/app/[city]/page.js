
import React from "react";

import cityToLocation from "../components/searchLogic";

import Pagination from "./pagination";

async function city({ params }) {
  const { city } = params;
  const data = await cityToLocation(city.trim());

  
  return (
    <>
        <Pagination data={data}/>
    </>
  );
}

export default city;
