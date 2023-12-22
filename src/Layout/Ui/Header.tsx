import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MenuFoldOutlined, MenuOutlined } from '@ant-design/icons';
import WithDrawer from '../../HighOrderComponent/WithDrawer';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import ContactForm from '../../Components/Done/ContactForm';

const Header = () => {
  const [t] = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.Header');
      if (header) {
        const scrollPosition = window.scrollY;
        const headerHeight = window.innerHeight;

        if (scrollPosition >= headerHeight) {
          header.classList.add('Scrolled');
        } else {
          header.classList.remove('Scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
      setIsModalOpen(true);
    };

  return (
    <header className='Header'>
      <Link to={'/'} > <img src="../Logo.png" alt="" /></Link>
      <nav>
        <ul className='Links'>
          <li> <a href='/#NewHeroSection'>{t('Home')}</a> </li>
          <li> <a href='/#OurDocrtrs'>{t('Doctors')}</a> </li>
          <li> <a href='/#Services'>{t('Services')}</a> </li>
          <li> <a href='/#Update'>{t('blog')}</a> </li>
          <li> <a href='/#Reviews'>{t('Reviews')}</a> </li>
          <li> <div  onClick={showModal}>{t('ContactUs')} <FaArrowAltCircleRight /></div> </li>
        </ul>
        <div className='MenuNav'>
          <WithDrawer
            title='Nav Links'
            button={<Button icon={<MenuOutlined />} type='primary' />}
          >
            <ul className='DrawerLinks'>
            <li> <a href='/#NewHeroSection'>{t('Home')}</a> </li>
          <li> <a href='/#OurDocrtrs'>{t('Doctors')}</a> </li>
          <li> <a href='/#Services'>{t('Services')}</a> </li>
          <li> <a href='/#Update'>{t('blog')}</a> </li>
          <li> <a href='/#Reviews'>{t('Reviews')}</a> </li>
          <li> <div  onClick={showModal}>{t('ContactUs')} <FaArrowAltCircleRight /></div> </li>
            </ul>
          </WithDrawer>
        </div>
      </nav>
      <ContactForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

    </header>
  );
};

export default Header;
