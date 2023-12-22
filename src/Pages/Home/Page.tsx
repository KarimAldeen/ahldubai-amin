import React from 'react'
import HeroSection from '../../Components/Done/HeroSection'
import Services from '../../Components/Done/Services'
import Reviews from '../../Components/Done/NewReview'
import Doctors from '../../Components/NewHome/Doctors'
import Update from '../../Components/Done/Update'
import Footer from '../../Layout/Ui/Footer'
import OurPartners from '../../Components/Done/OurPartners'
import NewHeroSection from '../../Components/Done/NewHeroSection'
import OurDocrtrs from '../../Components/Done/OurDocrtrs'

const Page = () => {
  return (
    <>
    {/* <HeroSection/> */}
    <NewHeroSection/>
    <Services/>
    <OurPartners/>

    <Reviews/>
    {/* <Reviews/> */}
    {/* <OurDocrtrs/> */}
    <Update/>
    
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