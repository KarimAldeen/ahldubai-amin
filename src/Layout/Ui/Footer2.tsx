import React from 'react'
import { useTranslation } from 'react-i18next';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const Footer2 = () => {
    const [t] = useTranslation();

  return (
    
    <div className='Footer2'>
        <div>
        @2023 All Right Reserved By KarimAldeen
        </div>
        <span>
        <ul className='Links'>
          <li> <NavLink to='/'>{t('Home')}</NavLink> </li>
          <li> <NavLink to='/doctors'>{t('Doctors')}</NavLink> </li>
          <li> <NavLink to='#services'>{t('Services')}</NavLink> </li>
          <li> <NavLink to='#questions'>{t('blog')}</NavLink> </li>
          <li> <NavLink to='#Reviews'>{t('Reviews')}</NavLink> </li>
        </ul>
        </span>
    </div>
  )
}

export default Footer2