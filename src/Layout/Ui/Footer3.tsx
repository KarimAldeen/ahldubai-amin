import React from 'react'
import { FaClock, FaLocationDot, FaPhone } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import { FaTimes } from 'react-icons/fa';
import { IoChatbubble } from "react-icons/io5";
const Footer3 = () => {
    return (
        <div className='Footer3'>
           <span>
           <div>
                <h1>
                    About us
                </h1>
                <p>
                    Etiam condimentum aliquam odio, ut consectetur enim. Nullam metus purus, pharetra quis tempus.

                </p>
                <span>
                    <div>
                        <FaPhone /> <h6>HotLine:</h6> <p>+3 (092) 508-38-01</p>
                    </div>
                    <div>
                    <FaLocationDot />
 <h6>Address:</h6> <p>  23, Medical Str., New York, USA</p>
                    </div>
                    <div>
                        <FaClock /> <h6> Mon-Sat:</h6> <p>8:00AM - 7:00PM</p>
                    </div>
                   
                </span>
            </div>

            <span>
                <h1>
                    Explore
                </h1>
                <ul className='Links'>
                    <li>  <IoIosArrowForward />
                        <a href='#NewHeroSection'>{('Home')}</a> </li>
                    <li> <IoIosArrowForward />
                        <Link to='/doctors'>{('Doctors')}</Link> </li>
                    <li> <IoIosArrowForward />
                        <a href='#Services'>{('Services')}</a> </li>
                    <li> <IoIosArrowForward />
                        <a href='#Update'>{('blog')}</a> </li>
                    <li> <IoIosArrowForward />
                        <a href='#Reviews'>{('Reviews')}</a> </li>
                </ul>
            </span>


            <article>
                <h1>Recent news</h1>
                <div>
                    <span>
                        <img src="../Layout/Footer.jpg" alt="" />
                        <div>
                            <div>
                                <span><FaClock />
 November 7, 2018</span><span> <IoChatbubble /> 6 </span>
                            </div>
                            <h6>
                            The best recreation areas for general immunity
                            </h6>
                        </div>
                    </span>
                    <span>
                        <img src="../Layout/Footer2.jpg" alt="" />
                        <div>
                            <div>
                                <span><FaClock />
 November 7, 2018</span><span> <IoChatbubble /> 6 </span>
                            </div>
                            <h6>
                            The best recreation areas for general immunity
                            </h6>
                        </div>
                    </span>
                </div>
            </article>

           </span>
            <div>
            <span>Like-themes </span>2023 © All Rights reserved <span>Aurora Health</span>
            </div>
        </div>
    )
}

export default Footer3