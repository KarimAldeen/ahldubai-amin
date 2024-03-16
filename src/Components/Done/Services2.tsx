import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Image from '../Utils/Image';
import { ImageBaseURL } from '../../api/config';
import { Spin } from 'antd';

const Services2 = ({ servicesData }: any) => {
    const navigate = useNavigate();

    const scrollToTop = (index: number) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate("/services/"+index)
    };
    const [t] = useTranslation()

    if (!servicesData) {
        return <Spin />
    }

    return (
        <div className='Services2_Section' id='Services'>
            <h1>{t("Popular Packages")}</h1>
            <div className='Services2_images'>
                {servicesData.map((service: any, index: any) => {
                    let ElementType: any;
                    // Check the value of service.elementType and assign the appropriate element type
                    switch (service.elemnt_type) {
                        case 'big':
                            ElementType = 'div';
                            break;
                        case 'small':
                            ElementType = 'span';
                            break;
                        default:
                            ElementType = 'div'; // or any other default element type
                    }

                    // Render the element with the appropriate type
                    return (
                        <ElementType onClick={() => scrollToTop(service?.id)} key={index}>
                            <Image src={ImageBaseURL + service.image} alt={service.title} />
                            <h1>{service.title}</h1>
                        </ElementType>
                    );
                })}
            </div>
        </div>
    );
};

export default Services2;
