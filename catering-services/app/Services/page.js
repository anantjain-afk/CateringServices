import { ServiceData } from "@/data"
import { ServiceIntro } from "@/data"
import { Check } from "lucide-react";
import { ServiceImage } from "@/data";
export default function Services(){

   const serviceIntro = ServiceIntro() ;
   console.log(Object.keys(serviceIntro))
   const serviceData = ServiceData() ;
   const images = ServiceImage() ;
   return (
      <>
         <div className="h-[60vh] bg-[url('/service.png')] bg-cover   flex justify-center items-center">
                           
            <div className="font-extrabold text-5xl text-red-500 ">Services</div>
         </div>
         <div className="p-8  flex flex-col gap-7 bg-gray-200">
               {/* If condition lagegi for lefft or right alternate */}
            {/* array.map */}
            {Object.keys(serviceIntro).map((intro,index)=>{
               if (index%2 == 0 ){
                  return <div className=" grid grid-cols-[45%_55%] gap-5 min-h-[40vh] p-5 ">
                  <div className=" h-full  flex justify-center items-center ">
                     <div className="h-[90%] w-[90%]  rounded-2xl    shadow-xl">
                        <img src={images[index]} alt={images[index]} className="w-full h-full object-cover rounded-2xl shadow-xl"/>
                     </div>
   
                  </div>
                  <div className=" h-full p-5 flex flex-col gap-3">
                     <div className="text-3xl  font-serif font-bold text-orange-400">{intro}</div>
                     <div className="text-gray-600 font-light">{serviceIntro[intro]}</div>
                     <div>
                        {Object.keys(serviceData[index]).map((feature , i)=>{
                           return <div className="flex gap-2">
                           <div className="mt-1 mr-3 text-orange-600"><Check className="h-5 w-5" /></div>
                           <div className="">
                              <div className="font-bold ">{feature}</div>
                              <div className="text-gray-600 mb-5 ">{serviceData[index][feature]}</div>
                           </div>
                        </div>
                        })}
                        
   
                     </div>
                  </div>   
   
                  
                  
               </div>
               }else{
                     return <div className=" grid grid-cols-[55%_45%] gap-5 min-h-[40vh] p-5 ">
               
                     <div className=" h-full p-5 flex flex-col gap-3 ml-2">
                        <div className="text-3xl font-serif font-bold text-orange-400">{intro}</div>
                        <div className="text-gray-600 font-light">{serviceIntro[intro]}</div>
                        <div>
                           {/* arr.map */}
                           {Object.keys(serviceData[index]).map((feature , i)=>{
                           return <div className="flex gap-2 ">
                           <div className="mt-1 mr-3 text-orange-600"><Check className="h-5 w-5" /></div>
                           <div>
                              <div className="font-bold ">{feature}</div>
                              <div className="text-gray-600 mb-5">{serviceData[index][feature]}</div>
                           </div>
                        </div>
                        })}
      
                        </div>
                     </div>   
                     <div className=" h-full  flex justify-center items-center">
                        <div className="h-[90%] w-[90%]  rounded-2xl  shadow-xl">
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
