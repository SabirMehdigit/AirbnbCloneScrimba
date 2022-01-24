import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Snowfall from 'react-snowfall';

import data from './data.js';
import Classes from "./App.css"


export default function App() {

  const cards = data.map(item => {

     
    return (
      <Card
      key= {item.id}
          {...item}
      />

    )
  })
  return (
    <div> 
      <Snowfall/>
       <Navbar />
      <Hero />
      <section className='cards-list'>
      {/* {cards}
      {cards} */}

      {cards}

      </section>
      


    </div>

  )
}


