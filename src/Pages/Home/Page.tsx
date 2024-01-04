import React from 'react'
import Services from '../../Components/Done/Services'
import Reviews from '../../Components/Done/NewReview'
import Update from '../../Components/Done/Update'
import NewHeroSection from '../../Components/Done/NewHeroSection'
import Services2 from '../../Components/Done/Services2'
import Partners from '../../Components/Partners/Partners'

const Page = () => {
  return (
    <>
    {/* <HeroSection/> */}
    <NewHeroSection/>
    <Services/>
    <Services2/>
    {/* <OurPartners/> */}

    <Reviews/>
    
    {/* <Reviews/> */}
    {/* <OurDocrtrs/> */}
    <Update/>
    <Partners/>
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