    import React, { useEffect, useState } from 'react'
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa6';
import ContactForm from './ContactForm';
import { useNavigate } from 'react-router-dom';

    const NewHeroSection = () => {
        const Data = [
            {
                image: "http://holamed.like-themes.com/wp-content/uploads/2018/11/SLIDE_01.jpg",
                h1: "medical",
                h2: "laboratory",

                info: "1Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, odio.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, odio. lorem Nam, odio.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, odio. lorem"
            },
            {
                image: "http://holamed.like-themes.com/wp-content/uploads/2018/11/SLIDE_02.jpg",
                h1: "Diagnostic",
                h2: "Center",

                info: "2Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, odio.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, odio. lorem Nam, odio.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, odio. lorem"
            },
            {
                image: "http://holamed.like-themes.com/wp-content/uploads/2018/11/SLIDE_03.jpg",
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
            setInfoData(Data[iteration]);
            setKey(iteration);
        console.log(key);
        
            iteration++;
    
            if (iteration === maxIterations) {
                iteration = 0
            }
        }, 6000); 
    
        return () => clearInterval(intervalId);
        }, []); 
    
        const [isModalOpen, setIsModalOpen] = useState(false);
        const showModal = () => {
            setIsModalOpen(true);
          };
          const navigate = useNavigate()

        return (
            <>
            <div className='NewHeroSection' id='NewHeroSection' style={{backgroundImage:`url(${infoData?.image})`}}  key={key} >
            <div className='imNewHeroSection'  key={key} >
            <div><h1>{infoData?.h1}</h1> <h2> {infoData?.h2} </h2></div>
                <p> {infoData?.info} </p>
                <div>
                        <button className='Button1'  onClick={showModal}>Find diagnosics <FaArrowAltCircleRight /></button>
                        <button className='Button2' onClick={()=> navigate("/doctors")} > <FaUser/> See Our Doctors   </button>
                </div>
            </div>
            </div>
            <ContactForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

            </>
            
        )
    }

    export default NewHeroSection