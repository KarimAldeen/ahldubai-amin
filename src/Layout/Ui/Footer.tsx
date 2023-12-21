import { FacebookFilled, InstagramFilled, LinkedinFilled, TwitterCircleFilled } from '@ant-design/icons'
import { Button, Divider } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='Footer'>
      <div>
        <div>
          <h1>ahldubai</h1>
          <p>
          Lorem Ipsum is simply dummy text printing and typesetting industry. been industry
          </p>
        </div>
        <div>
          <h1>Support</h1>
          <Link to="/">Home</Link>
          <Link to="/">Careers</Link>
          <Link to="/">Blog</Link>
          <Link to="/">Securety</Link>

        </div>
        <div>
          <h1>Support</h1>
          <Link to="/">Home</Link>
          <Link to="/">Careers</Link>
          <Link to="/">Blog</Link>
          <Link to="/">Securety</Link>

        </div>
        <div>
          <h1>Support</h1>
          <Link to="/">Home</Link>
          <Link to="/">Careers</Link>
          <Link to="/">Blog</Link>
          <Link to="/">Securety</Link>

        </div>
       
        <div className='ContactFooter'>
          <h1>Contact Us</h1>
          <h6>Phone 09575549234</h6>
          <h6>karim@gmail.com</h6>
          <span>
          <Button type="primary" shape="circle" icon={<FacebookFilled />} />
      <Button type="primary" shape="circle" icon={<TwitterCircleFilled />} />
      <Button type="primary" shape="circle" icon={<InstagramFilled />} />

          </span>
        </div>
      </div>
      <Divider />
      <span>
      <div>
      @2023 All Right Reserved By Codeindeed
      </div>
      <div>
        <span>
        Privacy Policy
          </span>
          <span>
          Cookie Policy
          </span>
      </div>
      </span>
    </div>
  )
}

export default Footer