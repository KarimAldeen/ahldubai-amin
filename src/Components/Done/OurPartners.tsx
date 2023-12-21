import { Image } from 'antd'
import React from 'react'

const OurPartners = () => {
    return (
        <div className='OurPartners'>
            <h1>  We cooperate with </h1>
         <div>
         <div>
                <Image
                   
                    src="../Home/Kings.jpeg"
                />
                <h4>
                    King's College Hospital London - Dubai
                </h4>


            </div>
            <div>
                <Image
                   
                    src="../Home/neuro.jpg"
                />
                <h4>
               
                Neuro Spinal Hospital Dubai
                </h4>

            </div>
            <div>
                <Image
                   
                    src="../Home/noroot.png"
                />
                <h4>
                American Hospital Dubai
                </h4>


            </div>
         </div>

        </div>
    )
}

export default OurPartners