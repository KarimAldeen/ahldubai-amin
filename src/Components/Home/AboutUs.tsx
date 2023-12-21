import React from 'react'
import Visibale from '../../HighOrderComponent/withVisibale';
import { BenefitData } from '../../Layout/app/Data';

const AboutUs = () => {

    return (
        <Visibale className='AboutUs' id='aboutus'>
            <div className="AboutUs_Left">
                <h1>What Deferent About Us ? </h1>
                <p>
                    Our task is to cooperate with the leading hospitals in the UAE Dubai.
                    Providing fast, efficient and informative medical services in hospitals, information about doctors, methods of modern surgical treatment.
                    Combining experience from around the world with cutting-edge technology, we provide our patients with access to the latest diagnostic and treatment methods.
                    Each patient will be able to seek medical care that will be most effective in his case.
                </p>
            </div>
            <div className="AboutUs_Right">
                {BenefitData?.map((item: any, index: number) => {
                    return (
                        <div key={index}>
                            <span> 0{index + 1} </span>
                            <div>
                                <h5>  {item?.title} </h5>
                                <p>
                                    {item?.info}

                                </p>
                            </div>
                        </div>
                    )
                })}

            </div>
        </Visibale>

    )
}

export default AboutUs