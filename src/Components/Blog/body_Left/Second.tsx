import React from 'react'
import { FaCheck } from 'react-icons/fa6'
import { useTranslation } from 'react-i18next';

const Second = () => {
    const [t] = useTranslation();

    const Data = [
        {
            name: t("Modern Dental Treatment"),
        },
        {
            name: t("Dermatology"),
        },
        {
            name: t("Low Pricing Package"),
        },
        {
            name: t("Surgery And Pathology"),
        },
        {
            name: t("Family Medicine"),
        },
        {
            name: t("20 Years Of Experience"),
        }
    ];

    return (
        <div className='Second'>
            <img src="../Blog/Second.png" alt="" />
            <div>
                <h1>{t("Health Service Is Will Provide.")}</h1>
                <p>{t("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy when an unknown scrambled.")}</p>
                <div>
                    <div>
                        {Data?.slice(0,3).map((item, index) => (
                            <span key={index}>
                                <FaCheck />
                                <h6>{item?.name}</h6>
                            </span>
                        ))}
                    </div>
                    <div>
                        {Data?.slice(3,6).map((item, index) => (
                            <span key={index}>
                                <FaCheck />
                                <h6>{item?.name}</h6>
                            </span>
                        ))}
                    </div>
                </div>
                <p>{t("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy when an unknown scrambled.")}</p>
            </div>
        </div>
    )
}

export default Second;
