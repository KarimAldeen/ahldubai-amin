import React from 'react'
import CardSwiper from '../SwiperDoctor/CardSwiper'
import { Select } from 'antd';


const Doctors = () => {
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
      };
  return (
    <div className='Doctors'>

      <div className='Doctors_Header'>
     <h1>      Select Your doctor's specialty</h1>
      <div>
      <Select
      defaultValue="lucy"
      style={{ width: 160 }}
      onChange={handleChange}
      options={[
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'Yiminghe', label: 'yiminghe' },
      ]}
    />
      </div>
      </div>
      <CardSwiper/>
    </div>
  )
}

export default Doctors