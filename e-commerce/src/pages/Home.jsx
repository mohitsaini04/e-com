import React from 'react'
import Background from './Background'
import Contact from './Contact'

import Multicards from './Multicards'
import Card from './Card'
import Animation from './Animation'



const Home = () => {
  return (
    <div>
      <div>
       <Background/>
       <Contact/>
       
       <Multicards/>
       <Card/>

       <Animation/>
             
      </div>
    </div>
  )
}

export default Home
