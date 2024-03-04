import React from 'react'
import { IoIosArrowBack, IoLogoWhatsapp } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'
import { navItems, renderNavItem } from '../../Layout/Ui/HeaderData'
import WithDrawer from '../../HighOrderComponent/WithDrawer'
import { Button } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import { handelOpenWhatsapp } from './ServicePriceTabs'
import useGetWidth from '../../Hooks/useGetWidth'

const NavBar = () => {
  const width = useGetWidth()
    const navigate= useNavigate()
  return (
    <div className='ServicesNavBar'>
       <div>
        {/* <IoIosArrowBack  onClick={()=> navigate(-1)} /> */}
     
       <img src="../Logo.png" alt="" />
       </div>
       <ul className='Links'>
          {navItems.map(renderNavItem)}
        </ul>
       <span onClick={()=>handelOpenWhatsapp(width)}>
       <IoLogoWhatsapp />
       WhatsApp Us

       </span>
       <div className='MenuNav'>
          <WithDrawer
            title='Nav Links'
            button={<Button icon={<MenuOutlined />} type='primary' />}
          >
            <ul className='DrawerLinks'>
              {navItems.map(renderNavItem)}
            </ul>
          </WithDrawer>
        </div>
    </div>
  )
}

export default NavBar