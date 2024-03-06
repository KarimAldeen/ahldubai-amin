import { Divider } from 'antd'
import React from 'react'
import useImageError from '../../../Hooks/useImageError'

const Fith = () => {
    return (
        <div className='Fith'>
            <Divider />
            <span>
                <span className='fifth_tag'>Tags: </span>
                <div>
                    <span>Care</span>
                    <span>Face</span>
                    <span>Health</span>
                    <span>Laboratory</span>
                    <span>Lens</span>
                </div>
            </span>
            <Divider />
                <div className='User'>
                    <img src="../Blog/User.png" onError={useImageError} alt="" />
                    Aurora
                </div>

            <Divider />


        </div>
    )
}

export default Fith