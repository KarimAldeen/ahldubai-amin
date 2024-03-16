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
import useGetWidth from '../../Hooks/useGetWidth';
import Translate from './Translate';
import { handelOpenWhatsapp } from '../../Pages/ServiceDetails/handelOpenWhatsapp';
import { useGetFooter } from '../../api/footer';
import useWhatsapp from '../../api/helper/OnClickgenerateWhatsapp';
import { useAddClick_whatsapp } from '../../api/uuid';

const Header = () => {
  const [t] = useTranslation();
  useHeader();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => setIsModalOpen(true);

  
  const { data: message } = useGetFooter();
  const WhatsappPhone = message?.info?.find((item: any) => item.key === 'whatsapp_phone')?.value;
  const messagesWithDefaultMessage = message?.info?.filter((item: any) => item.key === 'defaulte_whatsapp_message');

  const message_whatsapp = messagesWithDefaultMessage?.map((item: any) => item.value)?.join(' ');
  
  
   const Whatsapp = useWhatsapp();

  const {mutate} = useAddClick_whatsapp() 


      function handelWhatsapp(width:any , whatsapp_view:any){
          handelOpenWhatsapp(width ,WhatsappPhone,  whatsapp_view)
          mutate({uuid:Whatsapp})
      }
  const width = useGetWidth();

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
            <span onClick={() => handelWhatsapp(width,message_whatsapp)}>
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
              <span onClick={() => handelWhatsapp(width,message_whatsapp)}>
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
