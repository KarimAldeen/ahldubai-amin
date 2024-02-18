import React from 'react'
import Pricing from '../../Components/Services2/Pricing'
import Process from '../../Components/Services2/Process'
import OurDocrtrs from '../../Components/Done/OurDocrtrs'
import Partners from '../../Components/Done/Partners'
import { MultyPageData, ServiceData } from '../../Data'

const Page2 = () => {

  return (
    <div className="Services2" >
      <Pricing Pricingdata={ServiceData?.PricingCard} />
      <Process steps={ServiceData?.steps} />
      <div className='Services2_body'>
        <OurDocrtrs />

      </div>
      <Partners data={MultyPageData?.partnerImages} />
    </div>
  )
}

export default Page2