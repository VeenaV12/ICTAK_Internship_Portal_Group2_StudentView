import React from "react"
import OnlineCourses from "../allcourses/OnlineCourses"
import Hero from "./hero/Hero"
import Testimonal from "./testimonal/Testimonal"
import About from '../about/About'
const Home = () => {
  return (
    <>
      <Hero />
      <About/>
      <OnlineCourses />
      <Testimonal />
    </>
  )
}

export default Home
