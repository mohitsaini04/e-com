import React from 'react'

const Contact = () => {
  return (
    <div className='mb-20'>
      <p className='text-red-600 text-2xl text-center '>BUY NOW</p>
      <p className='text-4xl text-center text-gray-800 font-bold mt-5'> BUY OUR TOP SELLINGS DESIGNS</p>
      <p className='text-xl text-center text-gray-400 '>These are the Top Selling Alloy Designs by NeoWheels currently. Checkout the full range of Alloy Wheels </p>
      <div className='grid grid-cols-4 mt-10 ml-10 gap-4'>
        <div>
<img src='https://www.neowheels.com/images/Upload/product/WhatsApp_Image_2025-01-21_at_12_78337.37' className='border-5 hover:border-7 border-gray-300'></img>
<p className='text-red-500 text-xl text-center'>18x7.5 HYDRA 5X139.7 CB+M</p>
 <p class="item-price text-center"><b>₹ 13465</b> MRP : <strike>₹ 14465</strike> </p>
        </div>
        <div>
<img src='https://www.neowheels.com/images/Upload/product/WhatsApp_Image_2024-04-27_at_12_82643.03'className='border-5 hover:border-7 border-gray-300'></img>
<p className='text-red-500 text-xl text-center'>17X7.5 POISON 5X114.3 BM</p>
<p class="item-price text-center"><b>₹ 10833</b> MRP : <strike>₹ 11000</strike> </p>
        </div>
        <div>
<img src='https://www.neowheels.com/images/Upload/product/WhatsApp_Crystal_BM_46009.jpeg'className='border-5 hover:border-7 border-gray-300'></img>
<p className='text-red-500 text-xl text-center'>16x6.5 CRYSTAL 4X100 BM</p>
<p class="item-price text-center"><b>₹ 9484</b> MRP : <strike>₹ 10404</strike> </p>
        </div>
        <div>
<img src='https://www.neowheels.com/images/Upload/product/chocolate-BM-5x114_44060_22715.3'className='border-5 hover:border-7 border-gray-300'></img>
<p className='text-red-500 text-xl text-center'>17x7.5 CHOCOLATE 5X139.7 BM</p>
<p class="item-price text-center"><b>₹ 11014</b> MRP : <strike>₹ 12014</strike> </p>

        </div>

      </div >
      <div className=''>
    <a href='Alloys'>  <button className='bg-yellow-500 text-2xl ml-160 font-bold mt-10 px-2 py-1 rounded-3xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-yellow-200'>VIEW MORE ALLOYS </button> </a>
    </div>
    </div>
  )
}

export default Contact
