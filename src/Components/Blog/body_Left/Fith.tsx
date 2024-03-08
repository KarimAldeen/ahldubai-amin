import { Divider } from 'antd';
import React from 'react';
import useImageError from '../../../Hooks/useImageError';
import { useTranslation } from 'react-i18next';

const Fith = () => {
    const [t] = useTranslation();

    return (
        <div className='Fith'>
            <Divider />
            <span>
                <span className='fifth_tag'>{t('Tags')}: </span>
                <div>
                    <span>{t('Care')}</span>
                    <span>{t('Face')}</span>
                    <span>{t('Health')}</span>
                    <span>{t('Laboratory')}</span>
                    <span>{t('Lens')}</span>
                </div>
            </span>
            <Divider />
            <div className='User'>
                <img src="../Blog/User.png" onError={useImageError} alt="" />
                {t('Aurora')}
            </div>
            <Divider />
        </div>
    );
}

export default Fith;
