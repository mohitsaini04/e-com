import React from 'react'
import PERFUME from '../assets/perfume.jpeg'
import MURTI from '../assets/murti.webp'
import BHOLE from '../assets/bhole.webp';
import PERFUME1 from '../assets/perfume1.webp'
import DASH from '../assets/dashcam.jpg';
import DASH1 from '../assets/dashcam1.jpg'
import ARMREST from '../assets/armrest.jpg'
import ARM from '../assets/armrest1.jpg'
import ARMREST2 from '../assets/armrest2.jpg'
import ARMS from '../assets/armrest3.jpg'
import SPEAKER from '../assets/speaker.webp';
import JBL from "../assets/jblset.webp";
import WOOFER from '../assets/wooferjbl.webp';



const Interior1 = () => {
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-3xl m-10 gap-10'>
    <div className='text-xl font-bold border-3 border-gray-300 hover:border-5 hover:bg-gray-200 rounded-3xl p-5 '>
      <img src={PERFUME}/>
      <p>SOLAR PERUME </p>
      <p>₹499 MRP <strike>₹699</strike></p>
      <button className='bg-amber-300 rounded-full px-5 py-1 ml-35 mt-5 hover:text-2xl'>ADD</button>
    </div>

    <div className='text-xl font-bold border-3 border-gray-300 hover:border-5 hover:bg-gray-200 rounded-3xl p-5 '>
      <img src={MURTI}/>
      <p>HANUMAN JI IDOL FOR CAR DASH </p>
      <p>₹</p>
      <button className='bg-amber-300 rounded-full px-5 py-1 ml-35 mt-5 hover:text-2xl'>ADD</button>
    </div>

    <div className='text-xl font-bold border-3 border-gray-300 hover:border-5 hover:bg-gray-200 rounded-3xl p-5 '>
      <img src={BHOLE}/>
      <p> </p>
      <p>₹</p>
      <button className='bg-amber-300 rounded-full px-5 py-1 ml-35 mt-5 hover:text-2xl'>ADD</button>
    </div>

    <div className='text-xl font-bold border-3 border-gray-300 hover:border-5 hover:bg-gray-200 rounded-3xl p-5 '>
      <img src={PERFUME1}/>
      <p> </p>
      <p>₹</p>
      <button className='bg-amber-300 rounded-full px-5 py-1 ml-35 mt-5 hover:text-2xl'>ADD</button>
    </div>

    <div className='text-xl font-bold border-3 border-gray-300 hover:border-5 hover:bg-gray-200 rounded-3xl p-5'>
      <img src={DASH}/>
      <p>CAR DASH CAMERA PRO 2K</p>
      <p>₹3490 MRP: <strike>₹5990</strike></p>
      <button className='bg-amber-300 rounded-full px-5 py-1 ml-35 mt-5 hover:text-2xl'>ADD</button>
    </div>

    <div className='text-xl font-bold border-3 border-gray-300 hover:border-5 hover:bg-gray-200 rounded-3xl p-5'>
      <img src={ARMREST2}/>
      <p className='mt-4'>CAR ARMREST COVER WITH STORAGE</p>
      <p>₹372 MRP: <strike>₹1099</strike></p>
      <button className='bg-amber-300 rounded-full px-5 py-1 ml-35 mt-5 hover:text-2xl'>ADD</button>
    </div>

     <div className='text-xl font-bold border-3 border-gray-300 hover:border-5 hover:bg-gray-200 rounded-3xl p-5'>
      <img src={ARMREST}/>
      <p className='mt-10'>TATA PUNCH ARM REST</p>
      <p>₹1899 MRP: <strike>₹3999</strike></p>
      <button className='bg-amber-300 rounded-full px-5 py-1 ml-35 mt-5 hover:text-2xl'>ADD</button>
    </div>

     <div className='text-xl font-bold border-3 border-gray-300 hover:border-5 hover:bg-gray-200 rounded-3xl p-5'>
      <img src={ARM}/>
       <p className='mt-7'>UNIVERSAL ARM REST</p>
      <p>₹899 MRP: <strike>₹1999</strike></p>
      <button className='bg-amber-300 rounded-full px-5 py-1 ml-35 mt-5 hover:text-2xl'>ADD</button>
    </div>

     <div className='text-xl font-bold border-3 border-gray-300 hover:border-5 hover:bg-gray-200 rounded-3xl p-5'>
      <img src={ARMS}/>
      <p> ARMREST WITH GLASS HOLDER</p>
      <p>₹1789 MRP: <strike>₹1999</strike></p>
      <button className='bg-amber-300 rounded-full px-5 py-1 ml-35 mt-5 hover:text-2xl'>ADD</button>
    </div>

     <div className='text-xl font-bold border-3 border-gray-300 hover:border-5 hover:bg-gray-200 rounded-3xl p-5'>
      <img src={DASH1}/>
       <p className='mt-20'>CP PLUS DESHCAM WITH 1080P FULL HD</p>
      <p>₹1999 MRP: <strike>₹5990</strike></p>
      <button className='bg-amber-300 rounded-full px-5 py-1 ml-35 mt-5 hover:text-2xl'>ADD</button>
    </div>

     <div className='text-xl font-bold border-3 border-gray-300 hover:border-5 hover:bg-gray-200 rounded-3xl p-5'>
      <img src={SPEAKER}/>
      <p>JBL STAGE 1621F-350W 6" COAXIAL SPEAKER</p>
      <p>₹2389 MRP: <strike>₹3690</strike></p>

      <button className='bg-amber-300 rounded-full px-5 py-1 ml-35 mt-5 hover:text-2xl'>ADD</button>
    </div>

     <div className='text-xl font-bold border-3 border-gray-300 hover:border-5 hover:bg-gray-200 rounded-3xl p-5'>
      <img src={JBL}/>
      <p className='mt-35'>JBL A SERIES 1621F-350W 6" COAXIAL SPEAKER</p>

<p>₹2800 MRP:<strike> ₹3690</strike></p>


      
      <button className='bg-amber-300 rounded-full px-5 py-1 ml-35 mt-5 hover:text-2xl'>ADD</button>
    </div>

     <div className='text-xl font-bold border-3 border-gray-300 hover:border-5 hover:bg-gray-200 rounded-3xl p-5'>
      <img src={WOOFER}/>
      <p>JBL CLUB WS1200 SUBWOOFER</p>
<p>₹8299 MRP:<strike> ₹12990</strike></p>

      <button className='bg-amber-300 rounded-full px-5 py-1 ml-35 mt-5 hover:text-2xl'>ADD</button>
    </div>

     <div className='text-xl font-bold border-3 border-gray-300 hover:border-5 hover:bg-gray-200 rounded-3xl p-5'>
      <img src=''/>
      <button className='bg-amber-300 rounded-full px-5 py-1 ml-35 mt-5 hover:text-2xl'>ADD</button>
    </div>

     <div className='text-xl font-bold border-3 border-gray-300 hover:border-5 hover:bg-gray-200 rounded-3xl p-5'>
      <img src=''/>
      <button className='bg-amber-300 rounded-full px-5 py-1 ml-35 mt-5 hover:text-2xl'>ADD</button>
    </div>

     <div className='text-xl font-bold border-3 border-gray-300 hover:border-5 hover:bg-gray-200 rounded-3xl p-5'>
      <img src=''/>
      <button className='bg-amber-300 rounded-full px-5 py-1 ml-35 mt-5 hover:text-2xl'>ADD</button>
    </div>

     <div className='text-xl font-bold border-3 border-gray-300 hover:border-5 hover:bg-gray-200 rounded-3xl p-5'>
      <img src=''/>
      <button className='bg-amber-300 rounded-full px-5 py-1 ml-35 mt-5 hover:text-2xl'>ADD</button>
    </div>

     <div className='text-xl font-bold border-3 border-gray-300 hover:border-5 hover:bg-gray-200 rounded-3xl p-5'>
      <img src=''/>
      <button className='bg-amber-300 rounded-full px-5 py-1 ml-35 mt-5 hover:text-2xl'>ADD</button>
    </div>

    
    </div>
  )
}

export default Interior1
