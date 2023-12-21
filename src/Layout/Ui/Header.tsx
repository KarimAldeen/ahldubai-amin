import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MenuFoldOutlined } from '@ant-design/icons'
import WithDrawer from '../../HighOrderComponent/WithDrawer'
import { Button } from 'antd'
import { useTranslation } from 'react-i18next'

export const LinksComp = ({ status }: any) => {
  const [t] = useTranslation()

  return (
    <ul className={status ? 'DrawerLinks' : 'Links'}>
      <li> <NavLink to='/'>{t("Home")}</NavLink>   </li>
      <li> <NavLink to='/features'>{t("Features")}</NavLink>   </li>
      <li> <NavLink to='/aboutus'>{t("aboutus")}</NavLink> </li>
      <li> <NavLink to='/questions'>{t("questions")}</NavLink> </li>

      <li> <NavLink to='/contact'>{t("Contact Us")}</NavLink>   </li>

    </ul>
  )
}
const Header = () => {


  return (

    <header className='Header'>
      <Link to={'/'} > <img src="https://static.tildacdn.com/tild3138-3936-4835-a133-663836326332/imgonline-com-ua-Sha.png" alt="" /></Link>
      <nav>
        <LinksComp status={false} />
        <div className='MenuNav'>
          <WithDrawer
            title="Links"
            // width={250}
            button={<Button icon={<MenuFoldOutlined />} type="primary" />}
          >

            <LinksComp status={true} />
          </WithDrawer>



        </div>
      </nav>
    </header>
  )
}

export default Header