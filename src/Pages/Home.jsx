import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Banner from '../Components/Banner'
import Latest from '../Components/Latest'
import About from '../Components/AboutHome'

const Home = () => {
  return (
    <div>
        <Banner/>
        <Latest/>
        <About/>
    </div>
  )
}

export default Home