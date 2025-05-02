import Image from "next/image";
import SearchCaters from "./components/landing";

import CarouselItems from "./components/carousel2";
export default function Home() {
  return (
    <>
      <div >
      <SearchCaters />
      <br/>

      <CarouselItems/>
      </div>
      
    </>
  );
}
