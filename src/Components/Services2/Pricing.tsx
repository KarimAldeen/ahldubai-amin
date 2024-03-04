import { ConfigProvider, Divider, Popover, Switch } from 'antd'
import React, { useState } from 'react'
import { FaRegCheckCircle } from 'react-icons/fa'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { FaInfoCircle } from "react-icons/fa";
import { FaCrown } from "react-icons/fa6";

const Pricing = ({Pricingdata}:any) => {
    const navigate = useNavigate()
    const [data, setData] = useState(Pricingdata);

    const [search] = useSearchParams()
    const handleNavigate = () => {
        navigate("/services/name?count="+search.get('count'))
    }

    const handleSwitchChange = (index:any) => {
        setData((prevData:any) => {
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
                {data?.map((item:any, index:any) => {
                    return (
                        <div key={index} className='Pricing_Card' >
                            <h4>{item?.title}</h4>
                            <p>{item?.subTitle}</p>
                            <h5>Starting from <strong>${item?.price}</strong></h5>
                            <Divider />
                            <h3>benefits</h3>
                            <div className='benefits'>
                                {item?.benefits?.map((benefit:any, index:any) => {
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
                                            {item?.Vipbenefits?.map((benefit:any, index:any) => {
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
