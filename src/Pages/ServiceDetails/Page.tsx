import React from 'react';
import NavBar from './NavBar';
import ServicePriceTabs from './ServicePriceTabs';
import { useGetSingleService } from '../../api/singleservice';
import { useParams } from 'react-router-dom';
import Image from '../../Components/Utils/Image';
import { ImageBaseURL } from '../../api/config';
import { Spin } from 'antd';

const ServiceDetails: React.FC = () => {
    const { id } = useParams();
    const { data,isLoading } = useGetSingleService({ service_id: id });
    const bulletPoints = [
        'Hustler-Free',
        'Free Consultations',
        'Fast additional fees',
        '24/7 Clients Support',
        
    ];


    if(isLoading){
        return <Spin/>
    }
    const service_data = data?.service
    return (
        <div className='ServiceDetails'>
            <NavBar />
            <div className='MainSection'>
                <h1>{service_data?.sub_title}</h1>
                <span className='bulletPoints'>
                    {service_data?.benefits?.map((point:any, index:any) => (
                        <span className='bulletPoint' key={index}>
                            <img src="../ServiceDetails/Check.svg" alt="" />
                            {point?.name}
                        </span>
                    ))}
                </span>
                <Image src={ImageBaseURL+service_data?.sub_image} alt="" />
            </div>
            <ServicePriceTabs sub_service={data?.sub_service} />
        </div>
    );
};

export default ServiceDetails;
