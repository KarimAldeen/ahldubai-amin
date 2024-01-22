import { PhoneFilled, UserOutlined } from '@ant-design/icons';
import { Button, Input, Progress } from 'antd';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DoctorsData } from '../Data';

const SingleDoctor = () => {
  const { id } = useParams();

  const doctor = DoctorsData.find((doc:any) => doc.id === Number(id)) as any;

  const { name,Category, Image, Summary, Full_description, skills, education,skill_Info} = doctor;

  // ...
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []); 


  return (
    <div className='Doctors'>
      <div className='Hero_Doctors'>
        <div>
          <h1>Doector Profiles</h1>
          <div>
            <h6>Home {`>`} </h6>
            <h5> Doectors Profile </h5>
            <h4>{`>`} {name}</h4>
          </div>
        </div>
      </div>

      <div className='SingleDoctor'>
        <div className='Left'>
          <div className='PersonalCard'>
            <img src={Image} alt={name} />
            <h1>{name}</h1>
            <p>{Category}</p>
          </div>
        </div>
        <div className='Right'>
          <h6>#About Us</h6>
          <h1>    Find The Right Doctor Righ At Your Fingertips</h1>
          <p>{Full_description}</p>
          <div className='OurDoctorSkill'>
            <h2>Skills Of Doctor</h2>
            <p>{skill_Info}</p>
            <div className='Skills'>
              {skills.map((skill:any, index:any) => (
                <div key={index} className='Skill'>
                  <Progress type="circle" percent={skill.percent} size="default" strokeColor={skill.color} format={() => ` ${skill.value}`} />
                  <span className='skillLabel'>{skill.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className='Educationai'>
            <h1>Educationai History</h1>
            <p>{Summary}</p>
            <div>
              {education.map((edu:any, index:any) => (
                <span key={index}>
                  <h1>Year</h1>
                  <p>{edu.year}</p>
                  <p>{edu.degree}</p>
                  <p>{edu.institute}</p>
                </span>
              ))}
            </div>
          </div>
          <div className="ContactForm">
          <h1>Order a consultation</h1>
            <Input prefix={<UserOutlined />} className='Input' size="large" placeholder="Inter Your Name" />
            <Input prefix={<PhoneFilled />} className='Input' size="large" placeholder="Inter Your Phone Number" />
            <Input.TextArea className='Input' placeholder="Comment Or Message" size="large" />
            <Button block type='primary'>Order a consultation</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleDoctor;
