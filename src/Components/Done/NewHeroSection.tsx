import React, { useEffect, useState } from 'react';
import { FaArrowAltCircleRight, FaUser } from 'react-icons/fa';
import ContactForm from './ContactForm';
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import useGetWidth from '../../Hooks/useGetWidth';
import { handelOpenWhatsapp } from '../../Pages/ServiceDetails/ServicePriceTabs';

const NewHeroSection = ({Data}:any) => {
  const [infoData, setInfoData] = useState(Data[0]);
  const [key, setKey] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const [t] = useTranslation()

  useEffect(() => {
 
    const maxIterations = Data.length;
    let iteration = key;

    const intervalId = setInterval(() => {
      setInfoData(Data[iteration]);
      setKey(iteration);

      iteration = (iteration + 1) % maxIterations;
    }, 6000);

    return () => clearInterval(intervalId);
  }, [key]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleImageClick = (index:number) => {
    setInfoData(Data[index]);
    setKey(index);
  };

  const width = useGetWidth()

  return (
    <>
      <div className='NewHeroSection' id='NewHeroSection' style={{ backgroundImage: `url(../Home/Hero/${infoData.image}.webp)` }} key={key}>
        <div className='imNewHeroSection' key={key}>
          <div>
            <h1>{t(`${infoData?.h1}`)}</h1> <h2>{t(`${infoData?.h2}`)}</h2>
          </div>
          <p> {infoData?.info} </p>
          <div>

            <button className='Button1' onClick={()=>handelOpenWhatsapp(width)}>
              {t("WhatsApp Us")} <FaArrowAltCircleRight />
            </button>
            <button className='Button2' onClick={() => navigate("/doctors")}>
              <FaUser /> {t("See_Our_Doctors")}
            </button>
          </div>
        </div>
      </div>
      {/* <ContactForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} /> */}
      <div className='Image_Controller'>
        {Data.map((item:any, index:any) => (
          <div key={index} onClick={() => handleImageClick(index)} className={infoData.image === item.image ? 'active_Image' : ''}></div>
        ))}
      </div>
      <div className='Social_Controller'>
        <div><FaFacebook/></div>
        <div><FaInstagram/></div>
        <div><FaTwitter/></div>

      </div>
    </>
  );
};

export default NewHeroSection;
