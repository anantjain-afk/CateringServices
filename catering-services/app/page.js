import Image from "next/image";
import SearchCaters from "./components/landing";

import CarouselItems from "./components/carousel2";
import Partners from "./components/partners";
import Testimonial from "./components/Testimonial";
export default function Home() {
  return (
    <>
      <div >
      <SearchCaters />
      <br/>

      <CarouselItems/>

      <br />
      <Partners/>
      <br />
      <div className="mb-23"></div>
      <Testimonial />
      </div>
      
    </>
  );
}
