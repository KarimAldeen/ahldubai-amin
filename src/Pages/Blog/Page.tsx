import React from 'react'
import First from '../../Components/Blog/body_Left/First'
import Second from '../../Components/Blog/body_Left/Second'
import { Button, Input } from 'antd'
import { PhoneFilled, UserOutlined } from '@ant-design/icons'
import Third from '../../Components/Blog/body_Left/Third'
import Fith from '../../Components/Blog/body_Left/Fith'
import { useTranslation } from 'react-i18next'

const Blog = () => {
    const [t] = useTranslation()
    return (
        <div className='Blog'>
            <div className='Hero_Blog'>
                <div>
                    <h1>{t("Blog")}</h1>
                    <div>
                        <h6>{t("Home")} {`>`} </h6>
                        <h5>{t("Blog")} {`>`}</h5>
                        <h4>
                       {t(" Shed light on prevalent heart conditions")}
                        </h4>
                    </div>
                </div>
            </div>
            <div className='Blog_body'>
                <div className='Blog_body_Left'>
                    <First />
                    <Third/>
                    <Second />
                    <Fith/>

                </div>
                {/* <div className='Blog_body_Right'>
                    <h1>Order a consultation</h1>
                    <Input prefix={<UserOutlined />} className='Input' size="middle" placeholder="Inter Your Name" />
                    <Input prefix={<PhoneFilled />} className='Input' size="middle" placeholder="Inter Your Phone Number" />
                    <Button block type='primary'>Submite</Button>
                </div> */}
            </div>

        </div>

    )
}

export default Blog