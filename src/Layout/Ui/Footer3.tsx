import React from 'react';
import { FaClock, FaLocationDot, FaPhone } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { FaTimes } from 'react-icons/fa';
import { IoChatbubble } from "react-icons/io5";
import { useTranslation } from 'react-i18next';
import { useGetFooter } from '../../api/footer';
//@ts-ignore
import { HashLink } from 'react-router-hash-link';

const Footer3 = () => {


  const exploreData = {
    title: 'Explore',
    links: [
      { icon: <IoIosArrowForward />, name: 'Home', href: '/#home' },
      { icon: <IoIosArrowForward />, name: 'Doctors', to: '/doctors' },
      { icon: <IoIosArrowForward />, name: 'Services', href: '/#Services' },
      { icon: <IoIosArrowForward />, name: 'Blog', to: '/blog' },
    ],
  };

  const recentNewsData = [
    {
      image: '../Layout/Footer.jpg',
      date: 'may 12, 2021',
      comments: 6,
      title: 'The best recreation areas for general immunity',
    },
    {
      image: '../Layout/Footer2.jpg',
      date: 'November 7, 2018',
      comments: 1,
      title: 'How can women protect themselves from breast cancer',
    },
  ];
  const  {data} = useGetFooter()

  const GetData =(Key:string)=>{
    return data?.info?.find((item: any) => item.key === Key)?.value;

  }
  const about_us = GetData("about_us")
  const copy_right = GetData("copy_right")
  const time_open = GetData("time_open")
  const address = GetData("address")
  const phone = GetData("phone")

  const aboutUsData = {
    title: 'About us',
    description: 'provides services to the organization of international, medical tourism in leading hospitals and medical centers in the UAE Dubai..',
 contactInfo: [
      { icon: <FaPhone />, title: 'HotLine', content: phone },
      { icon: <FaLocationDot />, title: 'Address', content: address },
      { icon: <FaClock />, title: 'Mon-Sat', content: time_open },
    ],
  };

  const footerText = 'Like-themes 2023 © All Rights reserved Aurora Health';
  const [t] = useTranslation()
  return (
    <div className='Footer3'>
      <span>
        <div>
          <h1>{t(`${aboutUsData.title}`)}</h1>
          <p>{about_us}</p>
          <span>
            {aboutUsData.contactInfo.map((info, index) => (
              <div key={index}>
                {info.icon} <h6>{t(`${info.title}`)} {" : "}</h6> <p>{t(`${info.content}`)}</p>
              </div>
            ))}
          </span>
        </div>

        <span>
          <h1>{t(`${exploreData.title}`)}</h1>
          <ul className='Links'>
            {exploreData.links.map((link, index) => (
             <li key={index}>
             {link.to ? (
               <Link to={link.to}>{link.name}</Link>
             ) : (
               <HashLink to={link.href}>{link.name}</HashLink>
             )}
           </li>
            ))}
          </ul>
        </span>

        <article>
          <h1>{t("Recent news")}</h1>
          <div>
            {recentNewsData.map((news, index) => (
              <span key={index}>
                <img src={news.image} alt="" />
                <div>
                  <div>
                    <span><FaClock /> {t(`${news.date}`)}</span><span> <IoChatbubble /> {t(`${news.comments}`)} </span>
                  </div>
                  <h6>{t(`${news.title}`)}</h6>
                </div>
              </span>
            ))}
          </div>
        </article>
      </span>

      <div>
        <span>{copy_right}</span>
      </div>
    </div>
  );
}

export default Footer3;
