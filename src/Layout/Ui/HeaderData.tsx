import { Link } from "react-router-dom";

export const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Services', path: '/services/name?count=1' },
    { name: 'Blog', path: '/blog' },
    { name: 'Reviews', path: '/reviews' }
  ];

  export   const renderNavItem = (item:any, index:any) => (
    <li key={index}>
        <Link to={item.path}>{(item.name)}</Link>
  
    </li>
  );