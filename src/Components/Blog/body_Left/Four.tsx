import React from 'react';
import { useTranslation } from 'react-i18next';

const Four = () => {
    const { t } = useTranslation();

    return (
        <div className='Four'>
            <p>
                {t('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis enim sit amet placerat vestibulum. Sed ut arcu quis nunc pellentesque dapibus a tristique tortor. Ut vulputate erat sit amet placerat consectetur. Donec suscipit leo vel erat lacinia, scelerisque malesuada urna condimentum.')}
            </p>
            <h1>{t('Comprehensive Eye Exams')}</h1>
            <p>{t('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis enim sit amet placerat vestibulum. Sed ut arcu quis nunc pellentesque dapibus a tristique tortor. Ut vulputate erat sit amet placerat consectetur. Donec suscipit leo vel erat lacinia, scelerisque malesuada urna condimentum. Pellentesque tincidunt ut eros a interdum. Aenean nibh condimentum.')}</p>
        </div>
    );
}

export default Four;
