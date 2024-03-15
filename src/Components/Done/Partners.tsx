import React from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBaseURL } from '../../api/config';
import Image from '../Utils/Image';

const Partners = ({data}:any) => {
    // Array of partner objects containing image paths and alt text

    const [t] = useTranslation()
    return (
        <div className='Partners'>
            <h1>{t("Partners")}</h1>
            <div>
                {data.map((partner:any, index:any) => (
                    <div key={index}>
                        <Image src={`${ImageBaseURL}${partner.image}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Partners;
