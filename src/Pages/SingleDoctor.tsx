import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Input, Progress } from 'antd';
import { useTranslation } from 'react-i18next';
import { useGetDoctor } from '../api/Doctors';
import Image from '../Components/Utils/Image';
import { ImageBaseURL } from '../api/config';

const SingleDoctor = () => {
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


  const { skill_Info, education_Info, skills, education } = StaticData[0];

  return (
    <div className='Doctors'>
      <div className='Hero_Doctors'>
        <div>
          <h1>{t("Doctor Profiles")}</h1>
          <div>
            <h6>{t("Home")} {'>'} </h6>
            <h5> {t("Doctors Profile")} </h5>
            <h4>{'>'}{name}</h4>
          </div>
        </div>
      </div>

      <div className='SingleDoctor'>
        <div className='Left'>
          <div className='PersonalCard'>
            <Image src={ImageBaseURL+data?.image} alt={data?.name} />
            <h1>{data?.name}</h1>
            <p>{data?.type}</p>
          </div>
        </div>
        <div className='Right'>
          <h6>#{t("About Us")}</h6>
          <h1>{t("Find The Right Doctor Right At Your Fingertips")}</h1>
          <p>{data?.description}</p>
          <div className='OurDoctorSkill'>
            <h2>{t("Skills Of Doctor")}</h2>
            <p>{skill_Info}</p>
            <div className='Skills'>
              {skills.map((skill, index) => (
                <div key={index} className='Skill'>
                  <Progress type="circle" percent={skill.percent} size="default" strokeColor={skill.color} format={() => ` ${skill.value}`} />
                  <span className='skillLabel'>{skill.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className='Educationai'>
            <h1>{t("Educational History")}</h1>
            <p>{education_Info}</p>
            <div>
              {education.map((edu, index) => (
                <span key={index}>
                  <h1>{t("Year")}</h1>
                  <p>{edu.year}</p>
                  <p>{edu.degree}</p>
                  <p>{edu.institute}</p>
                </span>
              ))}
            </div>
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default SingleDoctor;
