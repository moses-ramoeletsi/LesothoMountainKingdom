import React from "react"
import {BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import TouristAttractions from "./pages/TouristAttractions"
import CultureAndTraditions from "./pages/CultureAndTraditions"
import AdventureActivities from "./pages/AdventureActivities"
import HistoryAndHeritage from "./pages/HistoryAndHeritage"
import TravelGuide from "./pages/TravelGuide"
import EconomyAndBusiness from "./pages/EconomyAndBusiness"
import Gallery from "./pages/Gallery"
import Blog from "./pages/Blog"
import ContactPage from "./pages/ContactPage"
import MapPage from "./pages/MapPage"
import Weather from "./pages/Weather"
import CurrencyPage from "./pages/CurrencyPage"

function App() {

  return (

    <BrowserRouter>
      <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/attractions" element={<TouristAttractions />} />
            <Route path="/culture" element={<CultureAndTraditions />} />
            <Route path="/adventure" element={<AdventureActivities />} />
            <Route path="/history" element={<HistoryAndHeritage />} />
            <Route path="/travel-guide" element={<TravelGuide />} />
            <Route path="/economy" element={<EconomyAndBusiness />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/currency" element={<CurrencyPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/weather-forecast" element={<Weather />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Layout> 
    </BrowserRouter>
  )
}

export default App
