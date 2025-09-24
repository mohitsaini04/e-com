import React from 'react'
import BG from '../assets/g63.jpg'


const Background = () => {
  return (
    <div>
     <div className='h-screen w-full bg-cover bg-no-repeat bg-center py-100' style={{backgroundImage: `url(${BG})`}}>
      <div className='text-white'>
        <p className='text-7xl text-red-700 font-bold '>SELECT YOUR VEHICLE</p>
<p className='text-3xl text-red-700 font-bold'> Over 100,000 Car Accessories</p>

      </div>

<div className='flex flex-col md:flex-row items-center gap-4 justify-center text-white mt-15 ml-10 mr-10'>
  <select className='bg-gray-50 w-full md:48 px-4 py-3 rounded-md border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500'>
    <option>Select Vehicle Brand</option>
    <option>Toyata</option>
    <option>Maruti</option>
    <option>Mahindra</option>
    <option>Kia</option>
    <optio>Bmw</optio>
    <option>Ford</option>
    <option>Tesla</option>
    <option>Hyundia</option>
    <option>Volkswagen</option>
    <option>porsche</option>
  </select>

 <select className='bg-gray-50 w-full md:48 px-4 py-3 rounded-md border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500'>
    <option>Select Model </option>
    <option>Fortuner</option>
    <option>Boleno</option>
    <option>Scorpio-n</option>
    <option>Seltos</option>
    <optio>M-series</optio>
    <option>Endeavour</option>
    <option>Model-y</option>
    <option>Varna</option>
    <option>Virtus</option>
    <option>Taycan</option>
  </select>

 <select className='bg-gray-50 w-full md:48 px-4 py-3 rounded-md border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500'>
   <option> Select Year </option>
    <option></option>
   <option> 2025</option>
   <option>2024</option>
   <option>2023</option>
   <option>2022</option>
   <option>2021</option>
   <option>2020</option>
   <option>2019</option>
   <option>2018</option>
   <option>2017</option>
   <option>2016</option>
   <option>2015</option>
  </select>


<button className='w-full md:auto bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold'>
  Search</button>

<button className='w-full md:auto bg-blue-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold'>
reset
</button>


</div>

<div>
  
</div>


      </div>
    </div>
  )
}

export default Background
