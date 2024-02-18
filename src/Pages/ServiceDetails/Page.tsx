import React, { useState } from 'react';
import NavBar from './NavBar';
import { IoLogoWhatsapp } from 'react-icons/io';
import {  Popover } from 'antd';
import { PricinfData } from '../../Components/Services2/PricingData';
import { Currency } from '../../Layout/app/Const';
import ImageBanner from './ImageSwiper';


const ServiceDetails: React.FC = () => {
    const bulletPoints = [
        'Hustler-Free',
        'Free Consultations',
        'Fast additional fees',
        '24/7 Clients Support',

    ];
    const [data, setData] = useState<any[]>(PricinfData);
    const [Active, setActive] = useState([data[1]])

    const Buttondata = ["C- Section Delivery", "Normal Delivery"];

    return (
        <div className='ServiceDetails'>
            <NavBar />
            <div className='MainSection'>
                <h1>
                    Get Professional Health Care
                    in Dubai Today
                </h1>
                <span className='bulletPoints'>
                    {bulletPoints.map((point, index) => (
                        <span className='bulletPoint' key={index}>
                            {/* <FaRegSquareCheck />  */}
                            <img src="../ServiceDetails/Check.svg" alt="" />
                            {point}</span>
                    ))}
                </span>

                <img src="../ServiceDetails/Home.png" alt="" />


            </div>
            <div className="Categoriesbuttons">
                {Buttondata.map((item, index) => (
                    <button
                        key={index}
                        className={Active[0] === data[index] ? 'active' : ''}
                        onClick={() => setActive([data[index]])}
                    >
                        {item}
                    </button>
                ))}
            </div>

            <div className='PricingCategories'>
                {/* <Coverflow data={data} setActive={setActive} /> */}
                {Active?.map((item: any, index: number) => {
                    return (
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
                                                    {/* <FaRegCheckCircle />  */}
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
                                                    {/* <FaRegCheckCircle />  */}
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
                    );
                })}
            </div>

        </div>
     
    );
};

export default ServiceDetails;
