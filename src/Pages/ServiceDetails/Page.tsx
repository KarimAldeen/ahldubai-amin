import React from 'react';
import NavBar from './NavBar';

import ServicePriceTabs from './ServicePriceTabs';


const ServiceDetails: React.FC = () => {
    const bulletPoints = [
        'Hustler-Free',
        'Free Consultations',
        'Fast additional fees',
        '24/7 Clients Support',
    ];


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
                            <img src="../ServiceDetails/Check.svg" alt="" />
                            {point}
                            </span>
                    ))}
                </span>

                <img src="/3-doctor.png" alt=""  />
            </div>
                        
             <ServicePriceTabs/>
        </div>
     
    );
};

export default ServiceDetails;
