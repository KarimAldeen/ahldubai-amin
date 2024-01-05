import React from 'react';
import { FaClock, FaLocationDot, FaPhone } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { FaTimes } from 'react-icons/fa';
import { IoChatbubble } from "react-icons/io5";

const Footer3 = () => {
  const aboutUsData = {
    title: 'About us',
    description: 'provides services to the organization of international, medical tourism in leading hospitals and medical centers in the UAE Dubai..',
 contactInfo: [
      { icon: <FaPhone />, title: 'HotLine: ', content: ' +971 58 518 75 77' },
      { icon: <FaLocationDot />, title: 'Address: ', content: 'Dubai Science Park - Al Barsha South Bella Rose Tower' },
      { icon: <FaClock />, title: 'Mon-Sat: ', content: ' 8:00AM - 7:00PM' },
    ],
  };

  const exploreData = {
    title: 'Explore',
    links: [
      { icon: <IoIosArrowForward />, text: 'Home', href: '#NewHeroSection' },
      { icon: <IoIosArrowForward />, text: 'Doctors', to: '/doctors' },
      { icon: <IoIosArrowForward />, text: 'Services', href: '#Services' },
      { icon: <IoIosArrowForward />, text: 'Blog', href: '#Update' },
      { icon: <IoIosArrowForward />, text: 'Reviews', href: '#Reviews' },
    ],
  };

  const recentNewsData = [
    {
      image: '../Layout/Footer.jpg',
      date: 'November 7, 2018',
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

  const footerText = 'Like-themes 2023 © All Rights reserved Aurora Health';

  return (
    <div className='Footer3'>
      <span>
        <div>
          <h1>{aboutUsData.title}</h1>
          <p>{aboutUsData.description}</p>
          <span>
            {aboutUsData.contactInfo.map((info, index) => (
              <div key={index}>
                {info.icon} <h6>{info.title}</h6> <p>{info.content}</p>
              </div>
            ))}
          </span>
        </div>

        <span>
          <h1>{exploreData.title}</h1>
          <ul className='Links'>
            {exploreData.links.map((link, index) => (
              <li key={index}> {link.icon} {link.to ? <Link to={link.to}>{link.text}</Link> : <a href={link.href}>{link.text}</a>} </li>
            ))}
          </ul>
        </span>

        <article>
          <h1>Recent news</h1>
          <div>
            {recentNewsData.map((news, index) => (
              <span key={index}>
                <img src={news.image} alt="" />
                <div>
                  <div>
                    <span><FaClock /> {news.date}</span><span> <IoChatbubble /> {news.comments} </span>
                  </div>
                  <h6>{news.title}</h6>
                </div>
              </span>
            ))}
          </div>
        </article>
      </span>

      <div>
        <span>{footerText}</span>
      </div>
    </div>
  );
}

export default Footer3;
