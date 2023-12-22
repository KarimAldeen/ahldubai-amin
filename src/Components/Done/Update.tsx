import { Button } from 'antd'
import React from 'react'
import { FaFacebook } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
const Update = () => {
    const navigate = useNavigate()
    return (
        <div className='Update' id="Update">

            <div className='Update_Header'>
                <div>
                    <p>From The Blog</p>
                    <h1>      Latest Update</h1>
                </div>
            </div>
            <div className="Update_Cards">
                {[1, 2, 3]?.map((item, index) => {
                    return (
                        <div className="Update_main">
                            <img src={`../Home/Update${index + 1}.png`} alt="" />
                            <div>
                                <div> <p> Dec 1, 2023</p> </div>
                                <h1>Explore the essentials of heart care, from lifestyle</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis enim sit amet placerat vestibulum.</p>

                            </div>
                            <span className='Update_main_Buttom'>
                                <div className='Update_main_rev'>
                                    <img src={`../Home/review1.png`} alt="" />
                                    <span>
                                        <h1>Ahmed Mouhsen</h1>
                                        <p>Happy Patients</p>
                                    </span>
                                </div>
                                <span className='learn_more' onClick={()=> navigate("/blog")}>
                                    learn more &rarr;

                                </span>
                            </span>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Update