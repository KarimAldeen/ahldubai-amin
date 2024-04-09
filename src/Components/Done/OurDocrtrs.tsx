import React from 'react'
import CardSwiper from '../Doctors/SwiperDoctor/CardSwiper'

const OurDocrtrs = ({data}:any) => {
  return (
    <div className='OurDocrtrs' id='OurDocrtrs'>
        <h1>OurDocrtrs</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  elementum vitae eget risus.</p>
          
            <CardSwiper data={data}/>
    </div>
  )
}

export default OurDocrtrs