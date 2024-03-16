import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
//@ts-ignore
import { HashLink } from 'react-router-hash-link';

export const NavItems = () => {
  const { t } = useTranslation();

  const navItems = [
    { name: t('Home'), href: '/#home' },
    { name: t('Doctors'), to: '/doctors' },
    { name: t('Services'), href: '/#Services' }, // corrected 'href' typo
    { name: t('Blog'), to: '/blog' },
    // { name: 'Reviews', to: '/reviews' }
  ];

  const renderNavItem = (item:any, index:any) => (
    <li key={index}>
      {item.to ? (
        <Link to={item.to}>{item.name}</Link>
      ) : (
        <HashLink to={item.href}>{item.name}</HashLink>
      )}
    </li>
  );

  return <>{navItems.map((item, index) => renderNavItem(item, index))}</>;
};
