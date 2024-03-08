import React from 'react';
import { useTranslation } from 'react-i18next';

const Partners = ({data}:any) => {
    // Array of partner objects containing image paths and alt text

    const [t] = useTranslation()
    return (
        <div className='Partners'>
            <h1>{t("Partners")}</h1>
            <div>
                {data.map((partner:any, index:any) => (
                    <div key={index}>
                        <img src={`${partner.src}`} alt={partner.alt} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Partners;
