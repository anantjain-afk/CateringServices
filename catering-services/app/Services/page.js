import { ServiceData } from "@/data"
import { ServiceIntro } from "@/data"
import { Check } from "lucide-react";
import { ServiceImage } from "@/data";
export default function Services(){

   const serviceIntro = ServiceIntro() ;
   const serviceData = ServiceData() ;
   const images = ServiceImage() ;
   return (
      <>
         <div className="h-[40vh] sm:h-[60vh] bg-[url('/service.png')] bg-cover flex justify-center items-center">
            <div className="font-extrabold text-3xl sm:text-5xl text-red-500 ">Services</div>
         </div>
         <div className="p-2 sm:p-4 md:p-8 flex flex-col gap-7 bg-gray-100">
            {Object.keys(serviceIntro).map((intro,index)=>{
               if (index%2 == 0 ){
                  return <div className="grid grid-cols-1 md:grid-cols-[45%_55%] gap-4 md:gap-5 min-h-[40vh] p-3 sm:p-5 rounded-lg bg-[#197278] shadow-xl">
                     <div className="h-56 sm:h-full flex justify-center items-center">
                        <div className="h-full w-full sm:h-[90%] sm:w-[90%] rounded-2xl shadow-xl">
                           <img src={images[index]} alt={images[index]} className="w-full h-full object-cover rounded-2xl shadow-xl"/>
                        </div>
                     </div>
                     <div className="h-auto sm:h-full p-2 sm:p-5 flex flex-col gap-2 sm:gap-3">
                        <div className="text-2xl sm:text-3xl font-serif font-bold text-yellow-400">{intro}</div>
                        <div className="text-white font-light text-base sm:text-lg">{serviceIntro[intro]}</div>
                        <div>
                           {Object.keys(serviceData[index]).map((feature , i)=>{
                              return <div className="flex gap-2" key={feature}>
                                 <div className="mt-1 mr-3 text-black"><Check className="h-5 w-5" /></div>
                                 <div>
                                    <div className="font-bold text-yellow-400 text-base sm:text-lg">{feature}</div>
                                    <div className="text-gray-300 mb-3 sm:mb-5 text-sm sm:text-base">{serviceData[index][feature]}</div>
                                 </div>
                              </div>
                           })}
                        </div>
                     </div>
                  </div>
               }else{
                  return <div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-4 md:gap-5 min-h-[40vh] rounded-lg bg-[#197278] p-3 sm:p-5 ">
                     <div className="h-auto sm:h-full p-2 sm:p-5 flex flex-col gap-2 sm:gap-3 ml-0 sm:ml-2">
                        <div className="text-2xl sm:text-3xl font-serif font-bold text-orange-400">{intro}</div>
                        <div className="text-white font-light text-base sm:text-lg">{serviceIntro[intro]}</div>
                        <div>
                           {Object.keys(serviceData[index]).map((feature , i)=>{
                              return <div className="flex gap-2" key={feature}>
                                 <div className="mt-1 mr-3 text-black"><Check className="h-5 w-5" /></div>
                                 <div>
                                    <div className="font-bold text-yellow-400 text-base sm:text-lg">{feature}</div>
                                    <div className="text-gray-200 mb-3 sm:mb-5 text-sm sm:text-base">{serviceData[index][feature]}</div>
                                 </div>
                              </div>
                           })}
                        </div>
                     </div>
                     <div className="h-56 sm:h-full flex justify-center items-center">
                        <div className="h-full w-full sm:h-[90%] sm:w-[90%] rounded-2xl shadow-xl">
                           <img src={images[index]} alt={images[index]} className="w-full h-full object-cover rounded-2xl shadow-xl"/>
                        </div>
                     </div>
                  </div>
               }
            })}
         </div>
      </>
   )
}
