import Services from '../../Components/Done/Services'
import Reviews from '../../Components/Done/NewReview'
import Update from '../../Components/Done/Update'
import NewHeroSection from '../../Components/Done/NewHeroSection'
import Services2 from '../../Components/Done/Services2'
import Partners from '../../Components/Done/Partners'
import { HomeData, MultyPageData } from '../../Data'

const Page = () => {
  
  return (
    <>
    <NewHeroSection Data={HomeData?.HeroSectionData}/>
    {/* <Services/> */}
    <Services2 servicesData={HomeData?.servicesData} />
    <Reviews data={HomeData?.reviewsData}/>
    {/* <Update/> */}
    <Partners data={MultyPageData?.partnerImages}/>

    </>
  )
}

export default Page