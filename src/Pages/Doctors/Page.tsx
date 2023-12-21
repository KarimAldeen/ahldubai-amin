import React from 'react'
import DoctorCard from '../../Components/Doctors/DoctorCard'

const Doctors = () => {
  return (
    <div className='Doctors'>
        <div className='Hero_Doctors'>
         <div>
         <h1>Doctors</h1>
          <div>
            <h6>Home {`>`} </h6>
            <h5>Doctors</h5>
          </div>
         </div>
        </div>
        <div className='Docor_Cards'>
        {  [1,2,3,,3,4,4,4,5,5,5,]?.map((item,index)=>{
            return(
              <DoctorCard/>
            )
          })}
        </div>
    </div>

  )
}

export default Doctors