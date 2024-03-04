import React from 'react';
import { useNavigate } from 'react-router-dom';

const Services2 = ({ servicesData }:any) => {
    const navigate = useNavigate();

    const scrollToTop = (index:number) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate("/services?count="+(+index+1));
    };

    return (
        <div className='Services2_Section' id='Services'>
            <h1>Popular Packages</h1>
            <div className='Services2_images'>
                {servicesData.map((service:any, index:any) => (
                    <service.elementType onClick={()=>scrollToTop(index)} key={index}>
                        <img src={service.image} alt={service.name} />
                        <h1>{service.name}</h1>
                    </service.elementType>
                ))}
            </div>
        </div>
    );
};

export default Services2;
