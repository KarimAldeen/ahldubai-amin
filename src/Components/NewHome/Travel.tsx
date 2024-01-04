import { CameraFilled, CarFilled, MoneyCollectFilled } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'
import { FaGuilded, FaLanguage, FaPlane } from 'react-icons/fa6'

const Travel = () => {
    return (
        <div className='Travel'>
            <div className='Travel_Left'>
                <h5>Start Your</h5>

                <h1>Dental Travel</h1>
                <p>
                    It is well known that Hungary has become a main tourism destination. Besides its charm and attractiveness, Hungary has developed to a top level in dental care and became a remarkable dental tourism location for foreign patients.

                </p>
            </div>
            <div className='Travel_Right'>
                <div className='Travel_Right_Top'>
                   <span>
                   <div>
                        <FaPlane />
                        <p>Travel</p>
                    </div>
                    <div>
                        <CarFilled />

                        <p>Car Parking
</p>
                    </div>
                    <div>
                        <MoneyCollectFilled />

                        <p>Accomodation</p>
                    </div>
                   </span>
                  <span>
                  <div>
                        <FaGuilded />

                        <p>Guide</p>
                    </div>
                    <div>
                        <FaLanguage />

                        <p>Translator</p>
                    </div>
                    <div>
                        <CameraFilled />

                        <p>Sightseeing</p>
                    </div>
                  </span>
                </div>
                <div className='Travel_Right_Buttom'>
                    <Button>
                        Experience Your Dental Holiday Now!
                    </Button>
                </div>
            </div>
        </div>

    )
}

export default Travel