import React from 'react'

const Card = () => {
  return (
    <div>
       <div>

      <div>
        <h1 className="text-xl text-center font-bold">
          CAR ACCESORIES STORE ONLINE FOR LED HEADLIGHT FOR CAR | PROJECTOR |
          CAR MATS | AMBIENT LIGHT FOR CAR
        </h1>
        <h2 className="text-center ">
          We Give The Best Quality Genuine Car Accesories at the Lowest Price In
          india.
        </h2>
      </div>
      
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 text-center font-bold mt-10">
        <div>
          <img src="https://tse2.mm.bing.net/th/id/OIP.LIAx_fvbEdbvNosqzFo5owHaFS?pid=Api&P=0&h=180" />
          <h4>Tyre inflater</h4> <h6>Top up air anywere</h6>
        </div>

        <div>
          <img src="https://tse4.mm.bing.net/th/id/OIP.ibn-l439pMC99HIkcAYXUgHaHa?pid=Api&P=0&h=180" />
          <h4>Led lighs</h4> <h6>Increase Light Output</h6>
        </div>

        <div>
          <img src="https://tse2.mm.bing.net/th/id/OIP.CpI6wWFATZuHZ6pv5pC5IQHaHa?pid=Api&P=0&h=180" />
          <h4>Car Charger</h4> <h6>Maintain Phone</h6>
        </div>

        <div>
          <img src="https://tse1.mm.bing.net/th/id/OIP.t5gIC_iTXEe8ePl3UriohwHaHa?pid=Api&P=0&h=180" />
        </div>

        <div>
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.BfCv1lTtn8Pl0hzCWkfwPAHaET?pid=Api&P=0&h=180"
            className="mt-5"
          />
          <h4 className="mt-3">Car Horn</h4>
          <h6>For Safe Driving</h6>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Card
