import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {  Progress, Rate } from 'antd';
import { useTranslation } from 'react-i18next';
import { useGetDoctor, useGetDoctors } from '../../api/Doctors';
import Image from '../../Components/Utils/Image';
import { ImageBaseURL } from '../../api/config';
import OurDocrtrs from '../../Components/Done/OurDocrtrs';
import CardSwiper from '../../Components/Doctors/SwiperDoctor/CardSwiper';

const NewSingleDoctor = () => {
  const { t } = useTranslation();
  const { name } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const StaticData = [
    {
      skill_Info: t("Our doctors are highly skilled professionals with extensive expertise in their respective fields. They have undergone rigorous training and possess a deep understanding of medical diagnostics, treatment procedures, and patient care."),
      education_Info: t(" BDS qualified as a dentist in 1984 by receiving his dental degree cum laude from the University of Witwatersrand, Johannesburg, South Africa. He graduated as a topper of the class with rank No.1 and received numerous awards including the Gold Medal of the Dental Association of South Africa for the most outstanding graduate. In 1990 he completed his 4-year full-time postgraduate Maxillo-Facial & Oral Surgery training at the University of Witwatersrand, South Africa and was awarded FFD (SA) MFOS. Since 1991 he is in a full-time specialist Maxillo-Facial & Oral Surgery private practice concentrating on the immediate loading of dental implants. To date, Dr Costa has placed over 35,000 dental implants. He has also presented as a key lecturer at numerous international implant congresses."),

      skills: [
        { label: t("Medic Success"), percent: 95, color: { '0%': '#e12355', '50%': '#e12355', '100%': '#e12355' }, value: 1000 },
        { label: t("Dental & Medical Services"), percent: 85, color: { '0%': '#0cbc87', '50%': '#0cbc87', '100%': '#0cbc87' }, value: 1200 },
        { label: t("Health Services"), percent: 70, color: { '0%': '#6f42c1', '50%': '#6f42c1', '100%': '#6f42c1' }, value: 500 },
      ],
      education: [
        { year: 2005, degree: t("Bachelor of Science in Medicine"), institute: t("Sunset University") },
        { year: 1986, degree: t("Doctor of Medicine"), institute: t("Moonlight Medical College") },
        { year: 2000, degree: t("Master of Surgery"), institute: t("Starry Skies Medical Academy") }
      ]
      
    }
  ];



 
  const {id} = useParams()
  const {data} = useGetDoctor({doctor_id:id})
  const {data:doctors} = useGetDoctors()
  // const {data:doctors} = useGetDoctors(`?type=${data?.type}`)



  // const { skill_Info, education_Info, skills, education } = StaticData[0];

  return (
      <div className='NewSingleDoctor'>
      <div className='TopSection'>
      <div className='Left'>
          <div className='PersonalCard'>
            <Image src={ImageBaseURL+data?.image} alt={data?.name} />
          </div>
        </div>
        <div className="Right">
        <h1>{data?.name}</h1>
         <span> 5.0 <Rate className='DoctorRate' disabled defaultValue={5}  /></span>
            <h3> {data?.type} </h3>
            <p>{data?.description} </p>
  
        </div>
      </div>
      <CardSwiper data={doctors}/>


      </div>
  );
};

export default NewSingleDoctor;
