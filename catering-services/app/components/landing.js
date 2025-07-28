"use client";
import { useRef, useState, React } from "react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

function Landing() {
  const inputRef = useRef();
  const router = useRouter();
  const [loading , setLoading ] = useState(false)
  async function handleClick() {
    const city = inputRef.current.value;     
    if(!city) return 
    setLoading(true)
    router.push(`/${city.toLowerCase()}`)
  }
  return (
    <>
      <div className="h-[70vh] relative flex items-center justify-center">
        <img
          src="/food.jpg"
          alt="food Image"
          className="w-full h-[70vh] object-cover "
        />
        <div className="absolute w-[98%] sm:w-[90%] md:w-[80%] h-[80%] sm:h-[70%] bg-amber-800/80 rounded-3xl flex flex-col md:flex-row justify-center items-center p-2 md:p-8 lg:p-12 xl:p-16">
          {/* Left: Headline and Input */}
          <div className="flex-1 flex flex-col gap-8 md:gap-12 lg:gap-16 justify-center w-full md:w-1/2 items-center md:items-start">
            <div className="text-center md:text-left">
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                Need food for work ?
              </h1>
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                Go with the pros.
              </h1>
            </div>
            <div className="flex flex-col sm:flex-row w-full md:w-[90%] lg:w-[80%] relative gap-2 md:gap-0 items-center">
              <div className="relative w-full md:w-[70%]">
                <img
                  src="/location.svg"
                  alt="location"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 cursor-pointer"
                />
                <input
                  ref={inputRef}
                  type="text"
                  className="h-12 w-full rounded-l-[3px] rounded-r-none bg-white pl-12 text-lg focus:outline-none focus:ring-0 focus:shadow-none"
                  placeholder="Enter your delivery location"
                />
                {/* <img
                  src="/target.png"
                  alt="target"
                  className="absolute top-1/2 transform -translate-y-1/2 right-3 w-8 h-8"
                /> */}
              </div>
              <button
                className={`w-full sm:w-[30%] bg-red-400 rounded-r-[3px] rounded-l-none text-white font-bold font-mono h-12 ${loading ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                disabled={loading}
                onClick={() => handleClick() }
              >
                {loading ? 'Loading...' : 'Search'}
              </button>
            </div>
          </div>
          {/* Right: Info */}
          <div className="flex-1 h-full flex flex-col justify-center items-center md:items-start mt-6 md:mt-0 w-full md:w-1/2 px-2 md:px-6 lg:px-10">
            <div className="bg-black/30 rounded-xl px-4 py-6 md:py-8 w-full max-w-md md:max-w-none">
              <p className="text-white font-bold text-base sm:text-lg md:text-2xl leading-snug mb-2 md:mb-4 text-center md:text-left">Over 100,000 restaurants</p>
              <p className="text-white font-bold text-base sm:text-lg md:text-2xl leading-snug mb-2 md:mb-4 text-center md:text-left">Any group size, dietary need, or budget</p>
              <p className="text-white font-bold text-base sm:text-lg md:text-2xl leading-snug mb-2 md:mb-4 text-center md:text-left">Delivered on time, as ordered</p>
              <p className="text-white font-bold text-base sm:text-lg md:text-2xl leading-snug text-center md:text-left">Reach a human in seconds, 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
