import { UsergroupAddOutlined } from '@ant-design/icons'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='HeroSection'>
    <div className='HeroSection_Left'>
      <h3>Locator</h3>
      <h1>Aurora Health</h1>
      <p>
        provides services to the organization of international,
        medical tourism in leading hospitals
        and medical centers in the UAE Dubai.
      </p>
      <button>Order a consultation</button>
    </div>
    <div className='HeroSection_Right'>
    <img src="../Home/doctor4.png" alt="" />
    <div className='Home_Card'>
      <span>
        <UsergroupAddOutlined/>
      </span>
      <div >
        <h1>1520+</h1>
        <h5>Activate Clients</h5>
      </div>
    </div>
    <div className='Home_Card2'>
      <span>
        <UsergroupAddOutlined/>
      </span>
      <div >
        <h1>1520+</h1>
        <h5>Activate Clients</h5>
      </div>
    </div>
    
    </div>
  </div>  )
}

export default HeroSection