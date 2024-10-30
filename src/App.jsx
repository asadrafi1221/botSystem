import React from 'react';
import './index.css';

function App() {
  return (
    <div className="bg-white flex items-center justify-center min-h-screen text-black p-4 md:p-8">
      <div className="h-[500px] w-full sm:w-[90%] md:w-[500px] xl:h-[90%] max-w-[500px] border-2 border-brown rounded-xl p-6 md:p-8">
        <div className='flex flex-col items-center justify-center pt-6 md:pt-10 gap-2'>
          <img src="google.png" className='w-16 md:w-[20%] xl:w-[25%]' alt="Google Logo"/>
          <p className='boldtext text-xl md:text-2xl'>Sign in</p>
          <p className='text-gray-600 text-sm md:text-base'>to continue to Google</p>
        </div>
        <div className='h-[60%] flex flex-col justify-around mt-6 md:mt-10'>
          <div className="flex flex-col">
            <form>
              <input type="text" className='p-4 w-full border-2 rounded-md outline-blue-500' placeholder='Email or phone' />
            </form>
            <div className='w-full'>
              <button className='text-blue-500 boldtext text-sm md:text-md mt-2'>Forgot email?</button>
            </div>
          </div>
          <div className='w-full text-xs md:text-sm text-gray-600 mt-4'>
            <p>
              Not your computer? Use a private window to sign in.
              <span className="text-blue-500 boldtext ml-2">Learn more</span>
            </p>
          </div>
          <div className='flex w-full justify-between mt-4'>
            <button className='boldtext text-blue-500 text-sm md:text-base'>Create account</button>
            <button className='bg-blue-500 px-4 py-2 rounded-md text-white text-sm md:text-base'>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
