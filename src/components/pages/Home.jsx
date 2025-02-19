import React from 'react'
import picture from '../../assets/pic2.jpg'
import picture2 from '../../assets/pic4.jpg'
function Home() {
  return (
    <div className='flex justify-center items-center p-10 text-center'>
      <div className=' flex flex-col justify-center items-centerfont-serif bg-gray-700 text-white h-120 w-120  '>
      <h1 className=' text-3xl mb-3 font-bold'>Elevate Your Style with Premium Fashion</h1>
         <p>Shop the latest trends in clothing, accessories, and more. Fast shipping & easy returns!"</p>
    <button className='ml-30 mt-5 p-1 text-center text-sm bg-transparent border border-white hover:bg-white hover:text-gray-900 text-white font-semibold rounded-lg transition duration-300  w-40 cursor-pointer '>Explore Collections</button>
   
        </div>
        <div className='flex gap-2'>  
        <img src={picture2} className='h-120 w-100 '/>
        <img src={picture} className='h-120 w-100'/>
        </div>
        <div>
          <button className='relative inline-block px-6 py-2 text-white bg-blue-500 transform skew-x-[-12deg] hover:bg-blue-600 focus:outline-none">
  <span class="inline-block skew-x-12">Click Me</span>'>DISCOVER EXCITING OFERS</button>
          <button className='mt-2 relative inline-block px-6 py-2 text-white bg-blue-500 transform skew-x-[-12deg] hover:bg-blue-600 focus:outline-none">
  <span class="inline-block skew-x-12">Click Me</span>'>SHOP NOW</button>
        </div>
    </div>
  )
}

export default Home