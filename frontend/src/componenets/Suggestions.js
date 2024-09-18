import React from 'react'
import Card from './Card'

function Suggestions() {
  return (
    <div className='w-full h-4/5 pt-20 flex justify-center rounded-xl z-10'>
       <div className='min-w-lg w-[650px] h-full overflow-y-auto rounded-xl flex-col scroll-smooth scroll-py-6 snap-y p-2 gap-3 flex'>
          <Card/>
           
       </div>
    </div>
  )
}

export default Suggestions
