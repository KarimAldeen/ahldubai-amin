import React from 'react'
import ReviewCard from '../../Components/Services/ReviewCard'
import First from '../../Components/Services/body_Left/First'
import Second from '../../Components/Services/body_Left/Second'
import { Button, Input } from 'antd'
import { PhoneFilled, UserOutlined } from '@ant-design/icons'
import OurDocrtrs from '../../Components/Done/OurDocrtrs'

const Services = () => {
    return (
        <div className='Services'>
            {/* <div className='Hero_Services'>
                <div>
                    <h1>Services</h1>
                    <div>
                        <h6>Home {`>`} </h6>
                        <h5>Services {`>`}</h5>
                        <h4>
                        Why a Precise Diagnosis is Vital to Treatment
                        </h4>
                    </div>
                </div>
            </div>
            <div className='Services_body'>
                <div className='Services_body_Left'>
                    <First />
                    <Second />

                </div>
                <div className='Services_body_Right'>
                    <h1>Order a consultation</h1>
                    <Input prefix={<UserOutlined />} className='Input' size="middle" placeholder="Inter Your Name" />
                    <Input prefix={<PhoneFilled />} className='Input' size="middle" placeholder="Inter Your Phone Number" />
                    <Button block type='primary'>Submite</Button>
                </div>
            </div> */}
            <div className='Services_body2'>
                <div className='Services_body_Left2'>
                    <OurDocrtrs/>

                </div>
               
            </div>

        </div>

    )
}

export default Services