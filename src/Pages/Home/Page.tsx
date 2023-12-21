import React from 'react'
import HeroSection from '../../Components/Done/HeroSection'
import Services from '../../Components/Done/Services'
import Reviews from '../../Components/Done/Reviews'
import Doctors from '../../Components/NewHome/Doctors'
import Update from '../../Components/Done/Update'
import Footer from '../../Layout/Ui/Footer'
import OurPartners from '../../Components/Done/OurPartners'

const Page = () => {
  return (
    <>
    <HeroSection/>
    <Services/>
    <Reviews/>
    <Update/>
    <OurPartners/>
    {/* <GetQuote/>
    <Clients/>
    <Services/>
    <Travel/>
    <Doctors/>
    <FloatNav/>
    <Questions/>
    <CursorBlob/>  */}
    
    </>
  )
}

export default Page