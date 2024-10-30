import React from 'react';
import './index.css'


function App() {
  return (
    <div className="bg-white flex items-center justify-center h-screen text-black ">
      <div className=" h-[60%] w-[85%] md:h-[60%] lg:h-[90vh] xl:h-[75%] md:w-[500px]  border-2 border-brown rounded-xl p-10">
        <div className='flex flex-col items-center justify-center  pt-10 gap-2'>
          <img src="google.png " className='w-[32%]'/>
          <p className='boldtext text-2xl'>Sign in</p>
          <p className='text-gray-600'>to continue to google</p>
        </div>
        <div className=' h-[60%] flex flex-col justify-around mt-10'>
        <div className="flex flex-col ">
          <form>
            <input type="text" className='p-5 w-full  border-2 rounded-md outline-blue-500' placeholder='Email or phone ' name="" id="" />
           
          </form>
          <div className='w-full'>
          <button className='text-blue-500 boldtext text-md mt-2'>Forget email?</button>
          </div>
        </div>
        <div className='w-full text-sm text-gray-600'>
          <p>Not your Computer use private window to signIn <spam className="text-blue-500 boldtext ml-2">Learn more</spam></p>
        </div>
        <div className='flex w-full justify-between'>
          <button className='boldtext text-blue-500'>Create account</button>
          <button className='bg-blue-500 px-5 py-2 rounded-md text-white'>next</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
