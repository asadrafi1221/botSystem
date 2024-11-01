import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Password() {

    const [password,setPassword] = useState(null)

    const HandleLogin = async () => {
        document.querySelector('.Loader').style.display = "flex";
        document.querySelector('.Mask').style.display = "flex";
    
        const res = await fetch('http://localhost:3500/App/authSignin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                email: localStorage.getItem('email'),
                password: password
            })
        });
    
        const data = await res.json();
    
        if (!data) { // Changed to an if statement for clarity
            console.log('Sorry, data not found');
        }
    
        setTimeout(() => {
            document.querySelector('.Loader').style.display = "none"; // Use "none" instead of "hidden"
            document.querySelector('.Mask').style.display = "none"; // Use "none" instead of "hidden"
            Navigate('/Recover');
        }, 2000);
    };
    
    const Navigate = useNavigate();
    
  return (
        <div className=" flex items-center justify-center flex-col min-h-screen text-black max-w-[100vw]">
            <div className='w-full Loader hidden absolute top-0 left-0 z-[100] max-w-[100vw]'><p className='w-[20%] max-h-[2vh] bg-blue-500 mt-3   rounded-3xl flex items-center justify-center'>.</p></div>
                    <div className='h-screen absolute top-0 left-0 z-50 Mask bg-black hidden  w-full opacity-25 '>
                    </div>
      <div className="h-[500px] w-[95vw] sm:w-[90%] md:w-[500px] xl:h-[90%] max-w-[500px] border-2 border-brown rounded-xl p-6 md:p-8">
        <div className='flex flex-col items-center justify-center pt-6 md:pt-10 gap-2'>
          <img src="google.png" className='w-16 md:w-[20%] xl:w-[25%]' alt="Google Logo"/>
          <p className='boldtext text-xl md:text-2xl'>Hi {`Asad`}</p>
          <p className='text-gray-600 text-sm md:text-base border-2 border-brown px-3 py-1 rounded-3xl'>{localStorage.getItem(email)}</p>
        </div>
        <div className='h-[60%] flex flex-col justify-around mt-6 md:mt-10'>
          <div className="flex flex-col">
            <form>
              <input type="text" className='p-4 w-full border-2 rounded-md outline-blue-500' placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)} />
            </form>
            <div className='w-full'>
              <button className='text-blue-500 boldtext text-sm md:text-md mt-2'>Forgot password?</button>
            </div>
          </div>
          
          <div className='flex w-full  mt-4 justify-end'>
            <button className='bg-blue-500 px-4 py-2 rounded-md text-white text-sm md:text-base' onClick={()=>HandleLogin()}>Next</button>
          </div>
        </div>
      </div>
   
    </div>
  )
}
