import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';
import WithDrawer from '../../HighOrderComponent/WithDrawer';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import ContactForm from '../../Components/Done/ContactForm';
import useHeader from './useHeader';
import { NavItems } from './HeaderData';
import { IoLogoWhatsapp } from 'react-icons/io';
import { handelOpenWhatsapp } from '../../Pages/ServiceDetails/ServicePriceTabs';
import useGetWidth from '../../Hooks/useGetWidth';
import Translate from './Translate';

const Header = () => {
  const [t] = useTranslation();
  useHeader();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => setIsModalOpen(true);

  const width = useGetWidth()

  return (
    <header className='Header HeaderStart'>
      <Link to='/'>
        <img src="../Layout/Logo.svg" alt="Logo" />
      </Link>
      <nav>
        <ul className='Links'>
          <NavItems/>
          <Translate/>

          <li>
            <span onClick={() => handelOpenWhatsapp(width)}>
              <IoLogoWhatsapp />
              {t("WhatsApp Us")}

            </span>
          </li>

        </ul>
        <div className='MenuNav'>
          <WithDrawer
            title='Nav Links'
            button={<Button icon={<MenuOutlined />} type='primary' />}
          >
            <ul className='DrawerLinks'>
              <NavItems/>
              <li>
              <span onClick={() => handelOpenWhatsapp(width)}>
              <IoLogoWhatsapp />
              {t("WhatsApp Us")}

            </span>
              </li>
            </ul>
          </WithDrawer>
        </div>
      </nav>
      <ContactForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </header>
  );
};

export default Header;
