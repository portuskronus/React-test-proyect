import React from 'react'
import styles from '../style'
import { cleopatra } from "../assets";

const Hero = () => {
  return (
    <section id="home">
      <div className="w-full h-screen">
          <img src={cleopatra} alt="cleopatra" className=" object-cover w-full h-full " />
        
        </div>
    </section>
  )
}

export default Hero