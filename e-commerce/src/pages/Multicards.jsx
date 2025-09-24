import React from 'react'

const Multicards = () => {
  return (
    <div>
      
<div className='flex text-xl gap-5  text-center ml-20 cursor-pointer' >
<a href='Interior'><div className='hover:underline hover:font-bold'>INTERIOR</div></a>
<a href='Exterior'><div className='hover:underline hover:font-bold'>EXTERIOR</div></a>
<div className='hover:underline hover:font-bold'>LIGHTING</div>
<a href='Alloys'><div className='hover:underline hover:font-bold'>ALLOYS</div></a>
<div className='hover:underline hover:font-bold'>CAR ELECTRONICS</div>
<div className='hover:underline hover:font-bold'>CAR PARTS</div>
<div className='hover:underline hover:font-bold'>CAR CARE AND STYLING</div>
</div>

<div className='grid grid-cols-6  m-5 gap-5' >
    <div >
        <img src='https://motorhunk.com/cdn/shop/files/CarFloorMatsBNa_360x.jpg?v=1714633808'></img><p>Floor Mats</p>
    </div>
    <div>
       <img src='https://motorhunk.com/cdn/shop/files/CarCurtinSunShadea_1_360x.jpg?v=1714633929'></img> <p>Sun Shades</p>
    </div>
    <div>
        <img src='https://motorhunk.com/cdn/shop/files/DoorVisora_360x.jpg?v=1714634707'></img><p>Wind Deflectors</p>
    </div>
    <div>
        <img src='https://motorhunk.com/cdn/shop/files/kkmkstataa4gmg00000.Main_b9ec0e7f-cdb7-4661-ab11-80db16ac32ad_360x.jpg?v=1736777118'></img><p>Car Key Cover</p>
    </div>
    <div>
        <img src='https://motorhunk.com/cdn/shop/files/kkmcbcjpmr00349.Main_c0a49867-aad8-4f60-9a84-b2df52a2e4dd_360x.jpg?v=1757503701'></img>
    </div>
    <div>
        <img src='https://motorhunk.com/cdn/shop/products/kkmcrfr00031.Main_360x.jpg?v=1756903187'></img>
    </div>
</div>





    </div>
  )
}

export default Multicards
