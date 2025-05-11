import React, { use } from 'react'
import { useRef } from 'react'

const Manager = () => {
  const ref = useRef();

  const showPassword = () => {
    alert('Show Password');
    ref.current.src = "icons/hide.png"; // change icon
  };

  return (
    <>
      <div class="absolute inset-0 -z-10 h-full w-full bg-slate-500 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>

      <div className="mx-auto mycontainer">

        <h1 className='text-2xl font-bold text-center'>
          <span className='text-green-500'>&lt;</span>
          Pass
          <span className='text-green-500'>OP/&gt;</span>
        </h1>

        <p className='text-green-900 text-lg text-center'>Your own Password Manager</p>

        <div className="flex flex-col p-4 text-black gap-3 items-center">
          <input className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name='' id="" placeholder='Enter website URL'/>

          <div className="flex w-full justify-between gap-8">
            <input className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name='' id="" placeholder='Enter Username'/>
            
            <div className="relative">
              <input className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name='' id="" placeholder='Enter Password'/>
              <span className='absolute right-3 top-[8px] cursor-pointer' onClick={showPassword}>
                <img ref={ref} src="icons/show.png" alt="" width={18}/>
              </span>
            </div>
          </div>


          <button className='flex justify-center items-center bg-green-500 hover:bg-green-400 rounded-full w-fit px-4 py-1 gap-2 border border-green-700'>
            <lord-icon
              src="https://cdn.lordicon.com/aupkjxuw.json"
              trigger="hover"
            >
            </lord-icon>
          Add Password </button>

        </div>
      </div>
    </>
  )
}

export default Manager

