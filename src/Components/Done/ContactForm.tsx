import React, { useState } from 'react'
import { Button, Form, Input } from 'antd';
import { PhoneFilled, UserOutlined } from '@ant-design/icons';
import { Modal } from 'antd';

const ContactForm = ({isModalOpen,setIsModalOpen}:any) => {

    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };
  
  return (
      <Modal  title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
     <div className="ContactForm">
     <h1>Sample Quotation</h1>
        <Input prefix={<UserOutlined />}  className='Input' size="large" placeholder="Inter Your Name" />
        <Input prefix={<PhoneFilled />} className='Input'  size="large" placeholder="Inter Your Phone Number" />
        <Input.TextArea  className='Input' placeholder="Comment Or Message"size="large" />
        <Button block type='primary'>See Your Trip</Button>
     </div>
      </Modal>
        

  )
}

export default ContactForm