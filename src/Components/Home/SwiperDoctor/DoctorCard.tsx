import { Button } from 'antd'
import React from 'react'
import { FaFacebook } from 'react-icons/fa6'

const DoctorCard = () => {
  return (
    <div className="Docor_Card">
    <img src={`../Doctor1.jpg`} alt="" />
    <div>
        <h5>Senior Dental Surgeon</h5>
        <h1>Xavier Symmonds</h1>
        <p>Committed to delivering dentistry of the highest quality, Xavier achieved numerous awards over Europe and United States.</p>

    </div>
    <span>
        <Button>
        Read More

        </Button>
        <div>
        <FaFacebook/>
        <FaFacebook/>
        <FaFacebook/>

        </div>
    </span>
</div>
  )
}

export default DoctorCard