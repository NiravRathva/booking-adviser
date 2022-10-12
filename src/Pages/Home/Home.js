import React from 'react'
import Featured from '../../Components/Featured/Featured'
import Footer from '../../Components/Footer/Footer'
import { Header } from '../../Components/Header/Header'
import Navbar from "../../Components/Navbar/Navbar"
import "./Home.css"
const Home = () => {
  return (
<>
<Navbar/>
<Header/>
<div className="HomeContainer">
  <Featured/>
  <h1 className="HomeTitle">Browse by property</h1>
</div>
<Footer/>
</>
  )
}

export default Home