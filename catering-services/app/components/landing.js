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
      <div className="h-[70vh] relative flex  items-center justify-center">
        <img
          src="/food.jpg"
          alt="food Image"
          className="w-full h-[70vh] object-cover  "
        />
        <div className="absolute  w-[80%] h-[65%] bg-amber-800/80 rounded-4xl flex justify-center items-center">
          <div className=" h-[80%] w-[90%]  flex justify-around items-center">
            <div className=" h-[80%] flex flex-col gap-16 justify-around font-">
              <div>
                <h1 className="text-white  text-6xl font-extrabold   ">
                  Need food for work ?
                </h1>
                <h1 className="text-white  text-6xl font-extrabold  ">
                  Go with the pros.
                </h1>
              </div>
              <div className="flex  relative">
                <img
                  src="/location.svg"
                  alt="location"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6"
                />
                <input
                  ref={inputRef}
                  type="text"
                  className="h-12 w-[70%]  rounded-l-[3px] rounded-r-none bg-white pl-12 text-lg focus:outline-none focus:ring-0 focus:shadow-none"
                  placeholder="Enter your delivery location"
                />
                <img
                  src="/target.png"
                  alt="target"
                  className="absolute top-1/2 transform -translate-y-1/2  left-93 w-8 h-8"
                />
                <button
                                    className={`w-[30%] bg-red-400 rounded-r-[3px] rounded-l-none text-white font-bold font-mono ${loading ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                  disabled={loading}
                  
                  onClick={() => handleClick() }
                >
                  {loading ? 'Loading...' : 'Search'}
                </button>
              </div>
            </div>

            <div className=" h-[80%] text-white font-medium text-2xl gap-y-4 flex flex-col justify-center">
              <p>Over 100,000 restaurants</p>
              <p>Any group size, dietary need, or budget</p>
              <p>Delivered on time, as ordered</p>
              <p>Reach a human in seconds, 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
