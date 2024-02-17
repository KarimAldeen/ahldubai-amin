import { ConfigProvider, Divider, Popover, Switch } from 'antd'
import React, { useState } from 'react'
import { FaRegCheckCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { FaInfoCircle } from "react-icons/fa";
import { FaCrown } from "react-icons/fa6";

const Pricing = () => {
    const navigate = useNavigate()
    const [data, setData] = useState([
        {
            image: '../PricingDetails/2.webp',
            title: "Dental Implants",
            subTitle: "Permanent, Reliable Tooth Replacement Option",
            price: "2,000",
            showAdditionalBenefits: false,
            benefits: [
                { text: "Free consultation (X-ray , 3D scans)", Icon: <FaInfoCircle />, iconData: "Labour room care, obstetrician's fee, medical consumables for delivery, routine lab tests, and admission medications" },
                { text: "10 Year guarantee", },
                { text: "Same day placement Don't wait 6 months", },
                { text: "Financing Options Available to Fit Your Budget", },
                { text: "Comprehensive Aftercare and Follow-Up Program", }
            ],
            Vipbenefits: [
                { text: "10 Year guarantee"},
                { text: "Same day placement Don't wait 6 months" }
            ]
        },
        {
            image: '../PricingDetails/3.jpeg',
            title: " Dental Veneers",
            subTitle: "Improves tooth color and shape.",
            price: "1,285",
            showAdditionalBenefits: false,
            benefits: [
                { text: "Pain-Free Procedure", Icon: <FaInfoCircle />, iconData: "Labour room care, obstetrician's fee, medical consumables for delivery, routine lab tests, and admission medications" },
                { text: "Stain Resistance", },
                { text: "Longevity and Durability 10-15 Years", },
                { text: "Cover Damaged Teeth", },
                { text: "Natural Look and Feel", }
            ],
            Vipbenefits: [
                { text: "10 Year guarantee"},
                { text: "Same day placement Don't wait 6 months" }
            ]
        },
        {
            image: '../PricingDetails/4.webp',
            title: "Other Dental Service",
            subTitle: "Complete Dental Excellence: All Services, One Destination",
            price: "500",
            showAdditionalBenefits: false,
            benefits: [
                { text: "Oral & Maxillofacial Service", Icon: <FaInfoCircle />, iconData: "Labour room care, obstetrician's fee, medical consumables for delivery, routine lab tests, and admission medications" },
                { text: "Radiological Services", },
                { text: "Aesthetic - Prosthodontic Services", },
                { text: "Endodontic Services", },
                { text: "Other Dental Services", }
            ],
            Vipbenefits: [
                { text: "10 Year guarantee"},
                { text: "Same day placement Don't wait 6 months" }
            ]
        }
    ]);

    const handleNavigate = () => {
        navigate("/services/name")
    }

    const handleSwitchChange = (index:any) => {
        setData(prevData => {
            const newData = [...prevData];
            newData[index].showAdditionalBenefits = !newData[index].showAdditionalBenefits;
            return newData;
        });
    };

    return (
        <div className='Pricing' id='Services'>
            <h6>Pricing Plan</h6>
            <h1> Get Started Now Pick A plan Later </h1>
            <div className='Pricing_Cards'>
                {data?.map((item, index) => {
                    return (
                        <div key={index} className='Pricing_Card' >
                            <h4>{item?.title}</h4>
                            <p>{item?.subTitle}</p>
                            <h5>Starting from <strong>${item?.price}</strong></h5>
                            <Divider />
                            <h3>benefits</h3>
                            <div className='benefits'>
                                {item?.benefits?.map((benefit, index) => {
                                    return (
                                        <span key={index} className='benefit'>
                                            <div>
                                                <FaRegCheckCircle />
                                                <h6>{benefit.text}</h6>
                                                {benefit.Icon &&
                                                    <Popover content={benefit.iconData} title="Title">
                                                        {benefit.Icon}
                                                    </Popover>
                                                }
                                            </div>
                                            <Divider />
                                        </span>
                                    )
                                })}
                            </div>
                            <div className="VipBenefits">
                                <article>
                                    <div><FaCrown /> VIP Services</div>
                                    <div>
                                        <Switch size="small" defaultChecked={item.showAdditionalBenefits} onChange={() => handleSwitchChange(index)} />
                                    </div>
                                </article>
                                {item.showAdditionalBenefits && (
                                    <div className='additionalBenefits'>
                                        <div className='benefits'>
                                            {item?.Vipbenefits?.map((benefit:any, index) => {
                                                return (
                                                    <span key={index} className='benefit'>
                                                        <div>
                                                            <FaRegCheckCircle />
                                                            <h6>{benefit.text}</h6>
                                                            {benefit?.Icon &&
                                                                <Popover content={benefit?.iconData} title="Title">
                                                                    {benefit?.Icon}
                                                                </Popover>
                                                            }
                                                        </div>
                                                        <Divider />
                                                    </span>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )}
                            </div>
                            <button onClick={handleNavigate}> Get Started </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Pricing
