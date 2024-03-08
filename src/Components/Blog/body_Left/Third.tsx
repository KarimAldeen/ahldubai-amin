import React from 'react';
import { useTranslation } from 'react-i18next';

const Third = () => {
  const { t } = useTranslation();

  return (
    <div className='Third'>
      <div>
        <p>
          {t('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis enim sit amet placerat vestibulum. Sed ut arcu quis nunc pellentesque dapibus a tristique tortor. Ut vulputate erat sit amet placerat consectetur.')}
        </p>
        <img src="../Home/review.svg" alt="" />
      </div>
      <p>
        {t('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis enim sit amet placerat vestibulum. Sed ut arcu quis nunc pellentesque dapibus a tristique tortor. Ut vulputate erat sit amet placerat consectetur.')}
      </p>
    </div>
  );
}

export default Third;
