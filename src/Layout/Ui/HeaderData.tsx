import { Link } from "react-router-dom";

export const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Services', path: '/Services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Reviews', path: '/Reviews' }
  ];

  export   const renderNavItem = (item:any, index:any) => (
    <li key={index}>
        <Link to={item.path}>{(item.name)}</Link>
  
    </li>
  );