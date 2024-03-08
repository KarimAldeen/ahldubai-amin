import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const NavItems = () => {
  const { t } = useTranslation();

  const navItems = [
    { name: t('Home'), path: '/' },
    { name: t('Doctors'), path: '/doctors' },
    { name: t('Services'), path: '/services/name?count=1' },
    { name: t('Blog'), path: '/blog' },
    // { name: 'Reviews', path: '/reviews' }
  ];

  const renderNavItem = (item:any, index:any) => (
    <li key={index}>
      <Link to={item.path}>{item.name}</Link>
    </li>
  );

  return (
    <>
      {navItems.map((item, index) => renderNavItem(item, index))}
    </>
  );
};
