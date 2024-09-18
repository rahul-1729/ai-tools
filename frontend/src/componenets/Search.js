import React from 'react'

function search() {
  return (
    <div className='w-full shrink-0   flex justify-center h-[65px] mt-16 z-10'>
         <div className='m-w-lg w-[600px]  h-full rounded-full border border-white bg-gray-800/25 p-1 flex justify-between px-5 items-center'>
     <input 
     type="text"
     className='w-4/5 h-full focus:outline-none text-xl font-thin text-white bg-gray-800/25 placeholder-gray-300'
     placeholder='Enter the job...'
      />
      <div className='text-gray-300'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
          <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </div>
      

    </div>

    </div>
  )
}

export default search
