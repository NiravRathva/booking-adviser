import React from 'react'
import Featured from '../../Components/Featured/Featured'
import Footer from '../../Components/Footer/Footer'
import { Header } from '../../Components/Header/Header'
import Navbar from "../../Components/Navbar/Navbar"
import HotelRating from "../../Components/HotelRating/HotelRating"

import "./Home.css"
import Mail from '../../Components/Mail/Mail'
const Home = () => {
  return (
<>
<Navbar/>
<Header />
<div className="HomeContainer">
  <h1 className="HomeTitle">Browse by property</h1>
  <Featured/>
  <HotelRating/>
  <Mail/>
</div>
<Footer/>
</>
  )
}

export default Home