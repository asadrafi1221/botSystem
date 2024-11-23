import React from 'react'

function LargeText() {
  return (
    <div className='p-5 h-[100vh]  Open bg-black flex flex-col justify-center max-w-[100vw] overflow-hidden '>
    <h1 className='StaticR  text-[20rem] whitespace-nowrap lg:text-[25rem] relative z-[10] '>
MERN STACK DEVELOPER
    </h1>
    <div className='absolute top-10 left-10 md:left-20 lg:left-52 lg:top-16 z-[20] ' data-scroll data-scroll-speed="-.1">
<img src="asad.jpg" className='h-40 w-36 object-cover sm:h-44 sm:w-40 md:w-52 md:h-64 lg:h-52 lg:w-40'/>
</div>
<div className='absolute bottom-20 -left-3 md:left-5 lg:bottom-5 xl:bottom-24 xl:left-10' data-scroll data-scroll-speed="-.1">
<img src="Girl.avif" className='h-40 w-36 object-cover lg:h-64 lg:w-56  z-0 '/>
</div>
<div className='absolute bottom-40 right-0 md:bottom-72 md:p-10 z-[20] ' data-scroll data-scroll-speed="-.2">
<img src="scroll.avif" className='h-40 w-36 sm:h-44 sm:w-40 md:w-52 md:h-64  lg:h-40 lg:w-36  object-cover '/>
</div>
<div className='absolute bottom-0 right-5'>
<h1 className='text-3xl uppercase '>Explore More</h1>
</div>

</div>
  )
}

export default LargeText