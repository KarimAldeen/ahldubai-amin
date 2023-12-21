import React from 'react'
import ReviewCard from '../../Components/Services/ReviewCard'
import CardSwiper from '../../Components/Services/SwiperClients/CardSwiper'

const Services = () => {
    return (
        <div className='Services'>
            <div className='Hero_Services'>
                <div>
                    <h1>Services</h1>
                    <div>
                        <h6>Home {`>`} </h6>
                        <h5>Services</h5>
                    </div>
                </div>
            </div>
            <div className='Services_Main'>
                <h1>Our Clinic Customer Reviews</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit tempor incididunt magna nostrud exercitation.


                </p>

                <div className='ReviewCards'>
                    {/* <ReviewCard/> */}
                    <CardSwiper/>
                </div>

            </div>
        </div>

    )
}

export default Services