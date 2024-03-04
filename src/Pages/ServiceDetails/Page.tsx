import React, { useState } from 'react';
import NavBar from './NavBar';
import { IoLogoWhatsapp } from 'react-icons/io';
import {  Popover } from 'antd';
import { PricinfData } from '../../Components/Services2/PricingData';
import { Currency } from '../../Layout/app/Const';
import ImageBanner from './ImageSwiper';
import ServicePriceTabs from './ServicePriceTabs';


const ServiceDetails: React.FC = () => {
    const bulletPoints = [
        'Hustler-Free',
        'Free Consultations',
        'Fast additional fees',
        '24/7 Clients Support',
        // 'Salary + ATM card',
        // 'Residency visa + EID'

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
                    in  Dubai Today
                </h1>
                <span className='bulletPoints'>
                    {bulletPoints.map((point, index) => (
                        <span className='bulletPoint' key={index}>
                            {/* <FaRegSquareCheck />  */}
                            <img src="../ServiceDetails/Check.svg" alt="" />
                            {point}
                            </span>
                    ))}
                </span>

                {/* <img src="../ServiceDetails/3-doctor.webp" alt=""  /> */}
                <img src="/banner_test.jpg" alt=""  />


            </div>
                        
             <ServicePriceTabs/>
{/*             
             <div className="Categoriesbuttons">
                {Buttondata.map((item, index) => (
                    <button
                        
                        key={index}
                        className={Active[0] === data[index] ? 'active  button-price' : ''}
                        onClick={() => setActive([data[index]])}
                    >
                        {item}
                    </button>
                ))}
            </div> */}

        </div>
     
    );
};

export default ServiceDetails;
