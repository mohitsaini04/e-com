import React from 'react'
import LED from '../assets/ledlight.jpeg';
import PROJECT from '../assets/projector.jpeg';
import EMBIENT from '../assets/ambient.jpg';
import SCREEN from '../assets/screen.jpg';
import GEARKNOB from '../assets/gearknob.webp';
const Lights = () => {
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-10 border-1 p-10'>


     <div className='text-xl font-bold border-3 border-gray-300 hover:border-5 hover:bg-gray-200 rounded-3xl p-5'>
<img src={LED}/>
<p>220W LED LIGHT</p>
<p>₹ 8585 MRP <strike>₹ 9980</strike> <button className='bg-amber-300 rounded-full px-5 py-1 ml-35 mt-5 hover:text-2xl'>ADD</button></p>
     </div>

 <div className='text-xl font-bold border-3 border-gray-300 hover:border-5 hover:bg-gray-200 rounded-3xl p-5'>
<img src={PROJECT}/>
<p>350W PROJECTOR</p>
<p>₹ 8585 MRP <strike>₹ 9980</strike> <button className='bg-amber-300 rounded-full px-5 py-1 ml-35 mt-5 hover:text-2xl'>ADD</button></p>

     </div>


      <div className='text-xl font-bold border-3 border-gray-300 hover:border-5 hover:bg-gray-200 rounded-3xl p-5'>
<img src={EMBIENT}/>
    <button className='bg-amber-300 rounded-full px-5 py-1 ml-35 mt-5 hover:text-2xl'>ADD</button>
     </div>


      <div className='text-xl font-bold border-3 border-gray-300 hover:border-5 hover:bg-gray-200 rounded-3xl p-5'>
<img src={SCREEN}/>
<button className='bg-amber-300 rounded-full px-5 py-1 ml-35 mt-5 hover:text-2xl'>ADD</button>
     </div>


      <div className='text-xl font-bold border-3 border-gray-300 hover:border-5 hover:bg-gray-200 rounded-3xl p-5'>
<img src={GEARKNOB}/>
<button className='bg-amber-300 rounded-full px-5 py-1 ml-35 mt-5 hover:text-2xl'>ADD</button>
     </div>



      <div className='text-xl font-bold border-3 border-gray-300 hover:border-5 hover:bg-gray-200 rounded-3xl p-5'>
<img src=''/>
<button className='bg-amber-300 rounded-full px-5 py-1 ml-35 mt-5 hover:text-2xl'>ADD</button>
     </div>



      <div className='text-xl font-bold border-3 border-gray-300 hover:border-5 hover:bg-gray-200 rounded-3xl p-5'>
<img src=''/>
     </div>



      <div className='text-xl font-bold border-3 border-gray-300 hover:border-5 hover:bg-gray-200 rounded-3xl p-5'>
<img src=''/>
     </div>



      <div className='text-xl font-bold border-3 border-gray-300 hover:border-5 hover:bg-gray-200 rounded-3xl p-5'> 
<img src=''/>
     </div>


      <div className='text-xl font-bold border-3 border-gray-300 hover:border-5 hover:bg-gray-200 rounded-3xl p-5'> 
<img src=''/>
     </div>


      <div className='text-xl font-bold border-3 border-gray-300 hover:border-5 hover:bg-gray-200 rounded-3xl p-5'>
<img src=''/>
     </div>


      <div className='text-xl font-bold border-3 border-gray-300 hover:border-5 hover:bg-gray-200 rounded-3xl p-5'>
<img src=''/>
     </div>


      <div className='text-xl font-bold border-3 border-gray-300 hover:border-5 hover:bg-gray-200 rounded-3xl p-5'>
<img src=''/>
     </div>


      <div className='text-xl font-bold border-3 border-gray-300 hover:border-5 hover:bg-gray-200 rounded-3xl p-5'> 
<img src=''/>
     </div>


      <div className='text-xl font-bold border-3 border-gray-300 hover:border-5 hover:bg-gray-200 rounded-3xl p-5'>
<img src=''/>
     </div>


      <div className='text-xl font-bold border-3 border-gray-300 hover:border-5 hover:bg-gray-200 rounded-3xl p-5'>
<img src=''/>
     </div>



     



    </div>
  )
}

export default Lights
