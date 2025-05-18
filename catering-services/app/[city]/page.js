import React from 'react'
import cityToLocation from '../components/searchLogic';
async function city({params}) {
    const {city }= params
    const data = await cityToLocation(city.trim());
    console.log(data)  
    const getRandomImage = () => {
        const totalImages = 35; 
        const randomIndex = Math.floor(Math.random() * totalImages) + 1;
        
        return `/food-images /${randomIndex}.jpg`
      };
  return (
    <>

        <div className='bg-gray-100 w-full flex flex-wrap  p-5 gap-6 justify-center'>
           { data.map(restro => {
            const randomImage = getRandomImage() ;
                return <div className='  w-[30%] h-[30vh] grid grid-cols-[40%_60%] bg-white rounded-2xl ' >
                    <div className=' p-3 flex items-center'>
                        <img src={randomImage} alt="Dish"  className='w-[100%] h-[70%]   bg-cover rounded-xl '/>
                    </div>
                    <div className=' p-4 flex flex-col '>
                       <div className='font-blod font-mono text-xl'>{restro.tags.name ? restro.tags.name : 'indian Food'}</div> 
                       <div>{}</div>
                    </div>
                    
                </div> 
            })}
            
        </div>
    </>

  )
}

export default city