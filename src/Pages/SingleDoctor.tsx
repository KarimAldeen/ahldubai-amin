import { PhoneFilled, UserOutlined } from '@ant-design/icons';
import { Button, Input, Progress } from 'antd';
import React from 'react';

const SingleDoctor = () => {
      
  const Color1 = { '0%': 'red', '50%': 'red', '100%': 'red' };
  const Color2 = { '0%': 'green', '50%': 'green', '100%': 'green' };
  const Color3 = { '0%': 'blue', '50%': 'blue', '100%': 'blue' };

  const doctorData = {
    name: "Dr. Daisy Bins",
    specialty: "Dentist surgeon",
    aboutUs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    title: "Find The Right Doctor Righ At Your Fingertips",
    subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, also the leap into electronic ty remaining essentially unchanged.",
    SkillsInfo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer and scrambled specimen book",

    skills: [
      { label: "Medic Success", percent: 95, color: Color1, value: 1000 },
      { label: "Dental & Medical Services", percent: 85, color: Color2, value: 1200 },
      { label: "Health Services", percent: 70, color: Color3, value: 500 },
    ],
    education: [
      { year: 2015, degree: "MBBS, MBBCH", institute: "Khulna Medical" },
      { year: 2015, degree: "MBBS, MBBCH", institute: "Khulna Medical" },
      { year: 2015, degree: "MBBS, MBBCH", institute: "Khulna Medical" },
    ],
    contactForm: {},
    image: "1.jpg",
  };
  
  const { name, specialty, aboutUs, skills, education, contactForm ,title,subtitle,SkillsInfo} = doctorData;

  // ...
  

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
            <img src={`../SingleDoctor/${doctorData.image}`} alt={name} />
            <h1>{name}</h1>
            <p>{specialty}</p>
          </div>
        </div>
        <div className='Right'>
          <h6>#About Us</h6>
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <div className='OurDoctorSkill'>
            <h2>Skills Of Doctor</h2>
            <p>{aboutUs}</p>
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
            <p>{aboutUs}</p>
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
