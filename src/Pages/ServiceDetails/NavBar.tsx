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

const NavBar = () => {
  const width = useGetWidth()
    const navigate= useNavigate()
    const [t] = useTranslation()
  return (
    <div className='ServicesNavBar'>
       <div>
        {/* <IoIosArrowBack  onClick={()=> navigate(-1)} /> */}
     
        <img src="../Layout/Logo.svg" alt="Logo" />
       </div>
       <ul className='Links'>
          <NavItems/>
        </ul>
       <span onClick={()=>handelOpenWhatsapp(width)}>
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