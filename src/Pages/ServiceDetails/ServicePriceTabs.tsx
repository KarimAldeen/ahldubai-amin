import React, { useState } from 'react'

import './ServiceTabs.scss'
import { PricinfData } from '../../Components/Services2/PricingData';
import { Currency } from '../../Layout/app/Const';
import ImageBanner from './ImageSwiper';
import { Popover } from 'antd';
import { IoLogoWhatsapp } from 'react-icons/io';
import { useSearchParams } from 'react-router-dom';
import useGetWidth from '../../Hooks/useGetWidth';
import OurDocrtrs from '../../Components/Done/OurDocrtrs';
import OurPartners from '../../Components/Done/OurPartners';
import Partners from '../../Components/Done/Partners';
import { MultyPageData } from '../../Data';
function ServicePriceTabs() {
    const [search] =  useSearchParams()
    const count = search.get('count') || 1

    console.log(count);
    
    const [data, setData] = useState<any[]>(PricinfData);
    const [Active, setActive] = useState([data[0] ,data[1],data[0] ,data[1]])

    const array  = (new Array(+count )).fill('hello')

    console.log(array);
    const  width= useGetWidth()
     
    const Buttondata = ["C- Section Delivery", "Normal Delivery","C- Section Delivery", "Normal Delivery"];

  return (
   <>
   

  <div className="PricingCategories">

    <div className="tab-wrap">
        {
            array.map((item:any , index:number)=>{

                console.log(index);
                
                return (
                    <>
                       <input
                            type="radio"
                            id={"tab" +index}
                            name="tabGroup1"
                            className="tab"
                            defaultChecked={index ==0 ? true:false}
                        />
                    <label htmlFor={"tab"+index}>{Buttondata[index]}</label>
                    </>
                )
            }
            )
        }
   
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
                            <button onClick={()=>handelOpenWhatsapp(width)} >
                                        <IoLogoWhatsapp /> Get Started Now
                                    </button>
                        </div>
                        </div>
                      
                    );
                })}
              
            {/* </div> */}
    
   
    </div>
    
   
  </div>
             <OurDocrtrs />
             <Partners data={MultyPageData?.partnerImages}/>
   </>
  )
}

export default ServicePriceTabs


export const handelOpenWhatsapp = (width:number)=>{

    var whatsappLink ;
                        
                        
                        if(width < 768){
                            // the device open the browser is  mobile 
                            whatsappLink = `whatsapp://send?phone=+963957570213&text=${encodeURIComponent(`Hello , Mr.Amin`)}&app_absent=0`;

                        }else{
                            // is laptop 
                            whatsappLink = `https://web.whatsapp.com/send?phone=+963957570213&text=${encodeURIComponent(`Hello , Mr.Amin`)}&app_absent=0`;
                        }


                        window.open(whatsappLink)
}