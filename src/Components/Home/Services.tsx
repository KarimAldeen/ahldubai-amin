import { ApiFilled, ClearOutlined, FastBackwardOutlined, MobileFilled } from '@ant-design/icons';
import React from 'react'
import { FaFigma, FaGoodreads, FaSearchengin } from "react-icons/fa6";
import Visibale from '../../HighOrderComponent/withVisibale';

const Services = () => {
    const Data: any = [
           { title: "We make a request for a consultation and a preliminary treatment plan according to your request", icon: "phone" }
        , { title: "Zoom-Meeting - online consultations of doctors in Dubai hospitals", icon: "online-support" }
        , { title: "Organization of treatment and selection of the best specialized hospitals, medical centers", icon: "hospital" }
        , { title: "Information about the best treatment programs for you. Diagnostic examination - the latest technology in equipment", icon:"feather-pen"}
        , { title: "Rehabilitation", icon: "wheelchair" }
        , { title: "Transfer to the airport / to the hospital", icon: "bus" }
        , { title: "Hotel reservation", icon: "handshake" }
                , { title: "Accompaniment and translation (English, German) at the doctor's appointment", icon: "translation" }



    ]
  
    return (
        <div className="Services" id='features'>
            <div className="in">
                <h1>How We Work's</h1>
                <Visibale className='Features'>
                    {Data?.map((item: any, index: number) => {
                        return (
                            <div className="Feature" key={index}>

                                <img src={`../Services/${item?.icon}.gif`} alt="Feature_Image" />
                                <h1>

                                {item?.title}
                                </h1>

                            </div>

                        )
                    })}
                </Visibale>
            </div>
        </div>
    )
}

export default Services