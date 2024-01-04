import React from 'react';
import { Carousel } from 'antd';
import { FaEarthEurope, FaPlaneCircleCheck, FaUserDoctor } from 'react-icons/fa6';
import { MdHealthAndSafety } from "react-icons/md";

const ImageSrc ="https://img.freepik.com/free-photo/business-urban-beautiful-landscape-night_1122-1702.jpg?w=740&t=st=1702886189~exp=1702886789~hmac=381f00e767dcd434c92e44c927633a7098f3ced8dd39fb863646f38d20ebd8a7"
  const ImageSrc2 ="https://img.freepik.com/free-photo/sparkling-dubai-skyscrapers-reflect-water-night_1304-3213.jpg?t=st=1702886028~exp=1702886628~hmac=45a9d4603fbb6eaaf9601df9c969198f4fa6c9b96cc500dc21507b6f8a7f6642"
  const ImageSrc3 ="https://img.freepik.com/free-photo/night-city-view_1417-1728.jpg?w=996&t=st=1702886258~exp=1702886858~hmac=f8a9ed81f4723a8494e8f744a364131af597292d397f1013e32c95dd07b24ced"
  
  const Contain = ()=>{
    return(
      <div className='HeroSection_Left'>
      <h3>Locator</h3>
      <h1>Aurora Health</h1>
      <p>
        provides services to the organization of international,
        medical tourism in leading hospitals
        and medical centers in the UAE Dubai.
      </p>
      <button>Order a consultation</button>
    </div>
    )
  }
  const Contain2 = ()=>{
    return(
      <div className='HeroSection_Buttom'>
        <div className='B_Left'>Dental Holiday!</div>
        <div className='B_Mid'>
       { ["phone", "hospital", "feather-pen", "wheelchair", "bus", "handshake","translation","online-support"].map((item,index)=>{
            return(
              <img src={`../Services/${item}.gif`} alt="Feature_Image" />

            )
          })}



        </div>
      </div>
    )
  }
  const HeroSection: React.FC = () => (
 <div className="HeroSection">
    <Contain/>
    <Contain2/>

  <Carousel autoplay>
    <img className='img' src={ImageSrc} alt="" />  
    <img className='img' src={ImageSrc2} alt="" />   
    <img className='img' src={ImageSrc3} alt="" />   

  </Carousel>

 </div>
);

export default HeroSection;