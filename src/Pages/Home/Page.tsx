import Services from '../../Components/Done/Services'
import Reviews from '../../Components/Done/NewReview'
import Update from '../../Components/Done/Update'
import NewHeroSection from '../../Components/Done/NewHeroSection'
import Services2 from '../../Components/Done/Services2'
import Partners from '../../Components/Done/Partners'
import { HomeData, MultyPageData } from '../../Data'
import { useGetHome } from '../../api/Home'
import { Spin } from 'antd'
import Layout from '../../Layout/Ui/Layout'

const Page = () => {
  const { data, isLoading } = useGetHome()

  if (isLoading) {
    
    return <div style={{display:"flex" , justifyContent:"center" , alignItems:"center" , height:"100vh" }}>
      <Spin/>
    </div>
  }
  return (
    <Layout className='Home_Page'>
      <NewHeroSection Data={data?.heroSection} />
      {/* <Services/> */}
      <Services2 servicesData={data?.service} />
      <Reviews data={data?.patientSay} />
      {/* <Update/> */}
      <Partners data={data?.Partner} />

    </Layout>

  )
}

export default Page