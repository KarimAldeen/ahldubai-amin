import React, { useState } from 'react'

import './ServiceTabs.scss'
import { PricinfData } from '../../Components/Services2/PricingData';
import { Currency } from '../../Layout/app/Const';
import ImageBanner from './ImageSwiper';
import { Popover } from 'antd';
import { IoLogoWhatsapp } from 'react-icons/io';
function ServicePriceTabs() {
    const [data, setData] = useState<any[]>(PricinfData);
    const [Active, setActive] = useState([data[0] ,,data[1]])

    const Buttondata = ["C- Section Delivery", "Normal Delivery"];
  return (
   <>
   

  <div className="PricingCategories">

    <div className="tab-wrap">
      <input
        type="radio"
        id="tab1"
        name="tabGroup1"
        className="tab"
        defaultChecked={true}
      />
      <label htmlFor="tab1">{Buttondata[0]}</label>
      <input type="radio" id="tab2" name="tabGroup1" className="tab" />
      <label htmlFor="tab2">{Buttondata[1]}</label>
      

      {/* <div className='PricingCategories'> */}
                {Active?.map((item: any, index: number) => {
                    return (
                        <div className="tab__content">
                              <div className='PricingCategoriesDetails' key={index}>
                            <span>
                                <h6>
                                    {Currency}
                                </h6>
                                <h3>
                                    {item.price}
                                </h3>
                            </span>
                            <article className='Categoriesbanner'>

                                <ImageBanner />

                            </article>
                            <div className='InfoSection'>
                                <div className='benefitsSection'>

                                    <h3>Benefits</h3>
                                    <div className='benefits'>
                                        {item.benefits?.map((benefit: any, index: any) => (
                                            <span key={index} className='benefit'>
                                                <div>
                                                    <div className='Icon'>
                                                        {index + 1}
                                                    </div>
                                                    <h6>{benefit.text}</h6>
                                                    {benefit.Icon && (
                                                        <Popover content={benefit.iconData} title="Title">
                                                            {benefit.Icon}
                                                        </Popover>
                                                    )}
                                                </div>
                                            </span>
                                        ))}
                                    </div>
                                 

                                </div>
                                <div className='benefitsSection'>

                                    <h3>Routine care for one baby</h3>
                                    <div className='benefits'>
                                        {item.benefits2?.map((benefit: any, index: any) => (
                                            <span key={index} className='benefit'>
                                                <div>
                                                    <div className='Icon'>
                                                        {index + 1}
                                                    </div>
                                                    <h6>{benefit.text}</h6>
                                                    {benefit.Icon && (
                                                        <Popover content={benefit.iconData} title="Title">
                                                            {benefit.Icon}
                                                        </Popover>
                                                    )}
                                                </div>
                                            </span>
                                        ))}
                                    </div>
                                  

                                </div>
                               
                            </div>
                            <button>
                                        <IoLogoWhatsapp /> Get Started Now
                                    </button>
                        </div>
                        </div>
                      
                    );
                })}
            {/* </div> */}
    
   
    </div>
    
   
  </div>
   </>
  )
}

export default ServicePriceTabs