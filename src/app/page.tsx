
import Image from "next/image";
import Link from "next/link";
import React from 'react'
import Hero from "./Components/Hero"
import PopularCar from "./Components/PopularCar";
import RecommendedCar from "./Components/RecommendedCars";

const Home = () => {
  return (
    <div> 

      <Hero/>
      <PopularCar/>
      <RecommendedCar/>
    </div>
  )
}

export default  Home
