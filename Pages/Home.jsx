import React from 'react'
import Hero from '../Components/Hero/Hero';

import Offers from '../Components/Offers/Offers';
import NewCollections from '../Components/New Collections/NewCollections';
import NewsLetter from '../Components/NewsLetter/NewsLetter';


const Home = () => {
  return (
    <div>
      <Hero/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
    
    </div>
  )
}

export default Home
