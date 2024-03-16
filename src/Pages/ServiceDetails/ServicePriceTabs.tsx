import React, { useState } from 'react'


import ImageBanner from './ImageSwiper';
import { IoLogoWhatsapp } from 'react-icons/io';
import { useSearchParams } from 'react-router-dom';
import useGetWidth from '../../Hooks/useGetWidth';
import OurDocrtrs from '../../Components/Done/OurDocrtrs';
import Partners from '../../Components/Done/Partners';
import { MultyPageData } from '../../Data';
import { handelOpenWhatsapp } from './handelOpenWhatsapp';
function ServicePriceTabs({sub_service}:any) {
 
    const  width= useGetWidth()
     
  return (
   <>
   

  <div className="PricingCategories">

    <div className="tab-wrap">
        {
            sub_service.map((item:any , index:number)=>{                
                return (
                    <>
                       <input
                            type="radio"
                            id={"tab" +index}
                            name="tabGroup1"
                            className="tab"
                            defaultChecked={index ==0 ? true:false}
                        />
                    <label htmlFor={"tab"+index}>{item?.name}</label>
                    </>
                )
            }
            )
        }
   
      {/* <div className='PricingCategories'> */}
                {sub_service?.map((item: any, index: number) => {
                    return (
                        <div className="tab__content">
                              <div className='PricingCategoriesDetails' key={index}>
                            <span>
               
                                <h3>
                                    {item.price}
                                </h3>
                            </span>
                            <article className='Categoriesbanner'>

                                <ImageBanner data={item?.banners}/>

                            </article>
                            <div className='InfoSection'>
                                {
                                    item?.benefits?.map((benefit:any)=>{
                                        return (
                                            <div className='benefitsSection'>

                                            <h3>{benefit?.name}</h3>
                                            <div className='benefits'>
                                                {benefit?.sub?.map((sub: any, index: any) => (
                                                    <span key={index} className='benefit'>
                                                        <div>
                                                            <div className='Icon'>
                                                                {index + 1}
                                                            </div>
                                                            <h6>{sub.name}</h6>
                                                         
                                                        </div>
                                                    </span>
                                                ))}
                                            </div>
                                          
        
                                        </div>
                                        )
                                    })
                                }
                            </div>
                            <button onClick={()=>handelOpenWhatsapp(width , item?.whatsapp_view)} >
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


