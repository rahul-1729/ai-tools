import React from 'react'

function Card() {
  return (
    <div className='w-full  h-[150px] rounded-xl shrink-0 flex p-3 justify-between  shadow shadow-gray-100'>
        <div className='flex gap-4 w-full '>
            <div className='h-[100px] w-[100px] bg-white rounded-lg border border-white '>
            
            </div>
            <div >
            <h2 className='text-white text-xl'>Product Name</h2>
            <h2 className='text-white  font-thin text-lg'>Company: Company variable</h2>
            </div>
           
        </div>
        <div className='h-full w-[70px] rounded-lg flex flex-col justify-end  flex items'>
                <button className='text-white h-[35px] w-full rounded-lg  shadow shadow-white '>Visit</button>
            </div>
    
    </div>
  )
}

export default Card
