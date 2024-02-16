import React, { useState } from 'react';
import NavBar from './NavBar';
import Coverflow from './Coverflow';
import { FaCheck, FaInfoCircle, FaRegCheckCircle } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { Divider, Popover } from 'antd';
import { PricinfData } from '../../Components/Services2/PricingData';
import { FaRegSquareCheck } from 'react-icons/fa6';
import { Currency } from '../../Layout/app/Const';


const ServiceDetails: React.FC = () => {
    const bulletPoints = [
        'Hustler-Free',
        'Free Consultations',
        'Fast additional fees',
        '24/7 Clients Support',

    ];
    const [data, setData] = useState<any[]>(PricinfData);
    const [Active, setActive] = useState([data[1]])

    const Buttondata = ["C- Section Delivery", "Normal Delivery", "Vip Delivery"];

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
                        <span className='bulletPoint' key={index}><FaRegSquareCheck />{point}</span>
                    ))}
                </span>

                <img src="../ServiceDetails/1.png" alt="" />


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

                            </article>
                            <div className='benefitsSection'>

                                <h3>benefits</h3>
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
                                <button>
                                    <IoLogoWhatsapp /> Get Started Now
                                </button>

                            </div>
                        </div>
                    );
                })}
            </div>

        </div>
        // <div  className='Test'>
        //         <div className='CategorieCard'>
        //             <img src="../PricingDetails/2.webp" alt="" />
        //             <h1>Dental Implants</h1>
        //             <p>Permanent, Reliable Tooth Replacement Option</p>
        //             <h4>2000$</h4>
        //         </div>
        // </div>
    );
};

export default ServiceDetails;
