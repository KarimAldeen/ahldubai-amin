import { Button } from 'antd'
import React from 'react'
import ClientCard from '../SwiperClients/ClientCard'
import CardSwiper from '../SwiperClients/CardSwiper'

const Clients = () => {
    return (
        <div className='Clients'>
            <div className="ClientsHeader">
                    <span>
                    <h6>Clients With</h6>
                    <h1>Reason To Smile</h1>
                    </span>
                    <div><button >All Client Testimonials</button></div>
            </div>
            <div className="ClientsMain">
               <CardSwiper/>
            </div>
        </div>

    )
}

export default Clients