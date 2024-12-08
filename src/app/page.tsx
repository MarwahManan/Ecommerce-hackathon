
import Image from "next/image";
import Link from "next/link";
import React from 'react'
import PopularCar from "./Components/PopularCar";
import RecommendedCar from "./Components/RecommendedCars";

const Home = () => {
  return (
    <div> 

      <PopularCar/>
      <RecommendedCar/>
    </div>
  )
}

export default  Home
