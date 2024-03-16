import React, { useEffect, useState } from 'react';
import { FaArrowAltCircleRight, FaUser } from 'react-icons/fa';
import ContactForm from './ContactForm';
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import useGetWidth from '../../Hooks/useGetWidth';
import { ImageBaseURL } from '../../api/config';
import { Spin } from 'antd';
import { handelOpenWhatsapp } from '../../Pages/ServiceDetails/handelOpenWhatsapp';
import useWhatsapp from '../../api/helper/OnClickgenerateWhatsapp';
import { useAddClick_whatsapp } from '../../api/uuid';
import { useGetFooter } from '../../api/footer';

const NewHeroSection = ({ Data }: any) => {
  const [infoData, setInfoData] = useState(Data && Data.length > 0 ? Data[0] : null);
  const [key, setKey] = useState(0);
  const navigate = useNavigate();
  const [t] = useTranslation();

  useEffect(() => {
    if (Data && Data.length > 0) {
      const maxIterations = Data.length;
      let iteration = key;

      const intervalId = setInterval(() => {
        setInfoData(Data[iteration]);
        setKey(iteration);

        iteration = (iteration + 1) % maxIterations;
      }, 6000);

      return () => clearInterval(intervalId);
    }
  }, [Data, key]);




  const handleImageClick = (index: number) => {
    setInfoData(Data[index]);
    setKey(index);
  };

  const { data: message } = useGetFooter();
  const messagesWithDefaultMessage = message?.info?.filter((item: any) => item.key === 'defaulte_whatsapp_message');
  const message_whatsapp = messagesWithDefaultMessage?.map((item: any) => item.value)?.join(' ');


  const Whatsapp = useWhatsapp();

  const { mutate } = useAddClick_whatsapp()


  function handelWhatsapp(width: any, whatsapp_view: any) {
    handelOpenWhatsapp(width, whatsapp_view)
    mutate({ uuid: Whatsapp })
  }

  const width = useGetWidth();

  if (!infoData) {
    return <Spin />
  }
  const getLastWord = (title: string) => {
    const words = title.split(" "); // Split the title into an array of words
    return words[words.length - 1]; // Return the last word from the array
  };

  const getTitleWithoutLastWord = (title: string) => {
    const words = title.split(" "); // Split the title into an array of words
    return words.slice(0, -1).join(" "); // Join all words except the last one
  };

  return (
    <>
      <div className='NewHeroSection' id='NewHeroSection' style={{ backgroundImage: `url(${ImageBaseURL}${infoData?.image})` }} key={key}>
        <div className='imNewHeroSection' key={key}>
          <div>
            <h1>{getTitleWithoutLastWord(infoData?.title)}</h1>
            <h2>{getLastWord(infoData?.title)}</h2>
          </div>
          <p> {infoData?.description} </p>
          <div>

            <button className='Button1' onClick={() => handelWhatsapp(width, message_whatsapp)}>
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
        {Data?.map((item: any, index: any) => (
          <div key={index} onClick={() => handleImageClick(index)} className={infoData.image === item.image ? 'active_Image' : ''}></div>
        ))}
      </div>
      <div className='Social_Controller'>
        <div><FaFacebook /></div>
        <div><FaInstagram /></div>
        <div><FaTwitter /></div>

      </div>
    </>
  );
};

export default NewHeroSection;
