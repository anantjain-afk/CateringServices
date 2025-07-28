import React from 'react'

function Partners() {
  return (
    <div className='flex flex-col justify-center items-center gap-6 w-full px-2'>
        <div className='font-mono font-light text-lg sm:text-xl text-center'>
        Business catering solutions trusted by:
        </div>
        <div className='w-full sm:w-[80%] flex justify-center'>
            <img src="/partner_logos.avif" alt="logos" className="w-full max-w-xs sm:max-w-lg md:max-w-2xl h-auto object-contain" />
        </div>
    </div>
  )
}

export default Partners