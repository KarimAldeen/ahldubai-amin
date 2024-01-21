import { PhoneFilled, UserOutlined } from '@ant-design/icons';
import { Button, Input, Progress, Space } from 'antd'
import React from 'react'

const SingleDoctor = () => {
    const Color1 = { '0%': 'red', '50%': 'red','100%':'red' };
    const Color2 = { '0%': 'green', '50%': 'green','100%':'green' };
    const Color3 = { '0%': 'blue', '50%': 'blue','100%':'blue' };

 
  return (
    <div className='Doctors'>
    <div className='Hero_Doctors'>
     <div>
     <h1>Doctors</h1>
      <div>
        <h6>Home {`>`} </h6>
        <h5> Doctors </h5>
        <h4>{`>`} Dr. Daisy Bins </h4>

      </div>
     </div>
    </div>
  
    <div className='SingleDoctor'>
            <div className='Left'>
                <div    className='PersonalCard'>
                        <img src="../SingleDoctor/1.jpg" alt="" />
                        <h1>Dr. Daisy Bins</h1>
                        <p>Dentist surgeon</p>
                </div>
                {/* <div className='InfoCard'>
            <h1>Personal Info</h1>
            <span>
                <div> <span> Address :</span><span> Dhaka mirpur, Eidson, 3731</span> </div>
                <div> <span> Email :</span><span> your-email@gmail.com</span> </div>
                <div> <span> Phone :</span><span>+000-010-000-050 </span> </div>
                <div> <span>  Website :</span><span> https://example.com </span> </div>
            </span>
                </div> */}
            </div>
            <div className='Right'>
                <h6>#About Us</h6>
                <h1>
                Find The Right Doctor Righ At Your Fingertips

                </h1>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, also the leap into electronic ty remaining essentially unchanged.


                </p>
              <div className='OurDoctorSkill'>
              <h2>
                Skills Of Doctor

                </h2>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer and scrambled specimen book.


                </p>
                <div className='Skills'>
   <div className='Skill'>
   <Progress type="circle" percent={75} size="default" strokeColor={Color1} />
   <span>Medic Success</span>
   </div>
   <div className='Skill'>
   <Progress type="circle" percent={85} size="default" strokeColor={Color2} />
   <span>Dental & Medical Services</span>
   </div>
    <div className='Skill'>
   <Progress type="circle" percent={70}  size="default" strokeColor={Color3} />
   <span>Health Services</span>
   </div>

                </div>
               
              </div>
              <div className='Educationai'>
                        <h1>
                        Educationai History

                        </h1>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has when an unknown printer took a galley of type and scrambled it to make a type specimen book


                        </p>
                        <div>
                            <span>
                                <h1>Year</h1>
                                <p>2015</p>
                                <p>2015</p>
                                <p>2015</p>
                            </span>
                            <span>
                                <h1>Degree</h1>
                                <p>MBBS,MBBCH</p>
                                <p>MBBS,MBBCH</p>
                                <p>MBBS,MBBCH</p>
                            </span>
                            <span>
                                <h1>Institute</h1>
                                <p>Khulna Medical</p>
                                <p>Khulna Medical</p>
                                <p>Khulna Medical</p>
                            </span>
                        </div>
                </div>
                <div className="ContactForm">
        <Input prefix={<UserOutlined />}  className='Input' size="large" placeholder="Inter Your Name" />
        <Input prefix={<PhoneFilled />} className='Input'  size="large" placeholder="Inter Your Phone Number" />
        <Input.TextArea  className='Input' placeholder="Comment Or Message"size="large" />
        <Button block type='primary'>Order a consultation</Button>
     </div>
            </div>


    </div>
</div>
  )
}

export default SingleDoctor