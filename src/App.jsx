import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Metrics from './components/Metrics'
import Features from './components/Features'
import Audience from './components/Audience'
import CaseStudies from './components/CaseStudies'
import Blog from './components/Blog'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <Features />
        <Audience />
        <CaseStudies />
        <Blog />
      </main>
      <Footer />
    </>
  )
}

export default App
