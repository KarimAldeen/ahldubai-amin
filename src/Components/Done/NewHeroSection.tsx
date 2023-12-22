import React, { useEffect, useState } from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa6';
import ContactForm from './ContactForm';
import { useNavigate } from 'react-router-dom';

const NewHeroSection = () => {
    const Data = [
        {
            image: "1",
            h1: "medical",
            h2: "laboratory",

            info: "1Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, odio.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, odio. lorem Nam, odio.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, odio. lorem"
        },
        {
            image: "2",
            h1: "Diagnostic",
            h2: "Center",

            info: "2Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, odio.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, odio. lorem Nam, odio.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, odio. lorem"
        },
        {
            image: "3",
            h1: "computer ",
            h2: "diagram",

            info: "3Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, odio.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, odio. lorem Nam, odio.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, odio. lorem"
        }
    ]

  const [infoData, setInfoData] = useState(Data[0]);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const maxIterations = 3;
    let iteration = 0;

    const intervalId = setInterval(() => {
      preloadImage(Data[iteration].image); // Preload the next image
      setInfoData(Data[iteration]);
      setKey(iteration);

      iteration++;

      if (iteration === maxIterations) {
        iteration = 0;
      }
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);

  const preloadImage = (imageUrl:any) => {
    const img = new Image();
    img.src = `../Home/${imageUrl}.jpg`;
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const navigate = useNavigate();

  return (
    <>
      <div className='NewHeroSection' id='NewHeroSection' style={{ backgroundImage: `url(../Home/${infoData.image}.jpg)` }} key={key}>
        <div className='imNewHeroSection' key={key}>
          <div>
            <h1>{infoData?.h1}</h1> <h2> {infoData?.h2} </h2>
          </div>
          <p> {infoData?.info} </p>
          <div>
            <button className='Button1' onClick={showModal}>
              Find diagnostics <FaArrowAltCircleRight />
            </button>
            <button className='Button2' onClick={() => navigate("/doctors")}>
              {" "}
              <FaUser /> See Our Doctors{" "}
            </button>
          </div>
        </div>
      </div>
      <ContactForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default NewHeroSection;
