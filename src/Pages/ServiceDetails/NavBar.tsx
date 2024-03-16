import React from 'react'
import { IoIosArrowBack, IoLogoWhatsapp } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'
import { NavItems } from '../../Layout/Ui/HeaderData'
import WithDrawer from '../../HighOrderComponent/WithDrawer'
import { Button } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import useGetWidth from '../../Hooks/useGetWidth'
import { IoMenu } from 'react-icons/io5'
import { useTranslation } from 'react-i18next'
import { handelOpenWhatsapp } from './handelOpenWhatsapp'
import { useGetFooter } from '../../api/footer'
import useWhatsapp from '../../api/helper/OnClickgenerateWhatsapp'
import { useAddClick_whatsapp } from '../../api/uuid'

const NavBar = () => {
  const width = useGetWidth()
    const navigate= useNavigate()
    const [t] = useTranslation()

    const { data: message } = useGetFooter();
    const messagesWithDefaultMessage = message?.info?.filter((item: any) => item.key === 'defaulte_whatsapp_message');
    const message_whatsapp = messagesWithDefaultMessage?.map((item: any) => item.value)?.join(' ');
    
    console.log(message_whatsapp); // This will log the concatenated string
    
     const Whatsapp = useWhatsapp();
  
    const {mutate} = useAddClick_whatsapp() 
  
  
        function handelWhatsapp(width:any , whatsapp_view:any){
            handelOpenWhatsapp(width , whatsapp_view)
            mutate({uuid:Whatsapp})
        }
  return (
    <div className='ServicesNavBar'>
       <div>
        {/* <IoIosArrowBack  onClick={()=> navigate(-1)} /> */}
     
        <img src="../Layout/Logo.svg" alt="Logo" />
       </div>
       <ul className='Links'>
          <NavItems/>
        </ul>
       <span onClick={()=>handelWhatsapp(width,message_whatsapp)}>
       <IoLogoWhatsapp />
       {t("WhatsApp Us")}

       </span>
       <div className='MenuNav'>
          <WithDrawer
            title='Nav Links'
            button={<Button icon={<IoMenu />} type='primary' />}
          >
            <ul className='DrawerLinks'>
              <NavItems/>
            </ul>
          </WithDrawer>
        </div>
    </div>
  )
}

export default NavBar