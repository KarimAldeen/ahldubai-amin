import React from 'react';
import { FaClock, FaLocationDot, FaPhone } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { FaTimes } from 'react-icons/fa';
import { IoChatbubble } from "react-icons/io5";
import { useTranslation } from 'react-i18next';
import { useGetFooter } from '../../api/footer';

const Footer3 = () => {
  const aboutUsData = {
    title: 'About us',
    description: 'provides services to the organization of international, medical tourism in leading hospitals and medical centers in the UAE Dubai..',
 contactInfo: [
      { icon: <FaPhone />, title: 'HotLine', content: '+971 58 518 75 77' },
      { icon: <FaLocationDot />, title: 'Address', content: 'Dubai Science Park - Al Barsha South Bella Rose Tower' },
      { icon: <FaClock />, title: 'Mon-Sat', content: '8:00AM - 7:00PM' },
    ],
  };

  const exploreData = {
    title: 'Explore',
    links: [
      { icon: <IoIosArrowForward />, text: 'Home', to: '/' },
      { icon: <IoIosArrowForward />, text: 'Doctors', to: '/doctors' },
      { icon: <IoIosArrowForward />, text: 'Services', to: '/services/name?count=1' },
      { icon: <IoIosArrowForward />, text: 'Blog', to: '/blog' },
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

  const footerText = 'Like-themes 2023 © All Rights reserved Aurora Health';
  const [t] = useTranslation()
  return (
    <div className='Footer3'>
      <span>
        <div>
          <h1>{t(`${aboutUsData.title}`)}</h1>
          <p>{t(`${aboutUsData.description}`)}</p>
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
              <li key={index}> {link.icon} <Link to={link.to}>{t(`${link.text}`)}</Link>  </li>
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
        <span>{t(`${footerText}`)}</span>
      </div>
    </div>
  );
}

export default Footer3;
