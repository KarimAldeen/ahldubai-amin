import React from 'react'
import Services from '../../Components/Done/Services'
import Reviews from '../../Components/Done/NewReview'
import Update from '../../Components/Done/Update'
import NewHeroSection from '../../Components/Done/NewHeroSection'

const Page = () => {
  return (
    <>
    {/* <HeroSection/> */}
    <NewHeroSection/>
    <Services/>
    {/* <OurPartners/> */}

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