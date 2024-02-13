import React from 'react'
import ImageSwiper from '../../Components/Pricing/ImageSwiper'
import First from '../../Components/Pricing/body_Left/First'
import Third from '../../Components/Pricing/body_Left/Third'
import Second from '../../Components/Pricing/body_Left/Second'
import Fith from '../../Components/Pricing/body_Left/Fith'
import { firstData, secondData, tabsData } from './PricingData'
import ResposiveTabs from './Tabs'
import { Tabs } from 'antd'
import WebTabs from './WebTabs'

const PricingDetails = () => {

  return (
    <div className='PricingDetails'>
      <ImageSwiper />
      <div className='Pricing_body'>
       
        <div className='Pricing_body_Right_resposive'>
        <ResposiveTabs tabsData={tabsData} />
        </div>
        <WebTabs tabsData={tabsData}/>

      </div>
     

    </div>
  )
}

export default PricingDetails