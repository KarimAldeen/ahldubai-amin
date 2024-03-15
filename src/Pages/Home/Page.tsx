import Services from '../../Components/Done/Services'
import Reviews from '../../Components/Done/NewReview'
import Update from '../../Components/Done/Update'
import NewHeroSection from '../../Components/Done/NewHeroSection'
import Services2 from '../../Components/Done/Services2'
import Partners from '../../Components/Done/Partners'
import { HomeData, MultyPageData } from '../../Data'
import { useGetHome } from '../../api/Home'
import { Spin } from 'antd'

const Page = () => {
  const {data,isLoading}  = useGetHome()

    if(isLoading){
      return <Spin/>
    }
  return (
    <>
    <NewHeroSection Data={data?.heroSection}/>
    {/* <Services/> */}
    <Services2 servicesData={data?.service} />
    <Reviews data={data?.patientSay}/>
    {/* <Update/> */}
    <Partners data={data?.Partner}/>

    </>
  )
}

export default Page