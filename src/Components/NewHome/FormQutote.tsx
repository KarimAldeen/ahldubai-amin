import { Button, Input } from 'antd'
import React, { useState } from 'react'

const FormQutote = () => {
    const [Form, setForm] = useState({
        name: "",
        phone: "",
        info: ""
      });
      
      const handleChange = (e: any) => {
        setForm({
          ...Form,
          [e.target.name]: e.target.value
        });
      };
      const handleSubmit = (e:any) => {
        e.preventDefault(); 
        console.log(Form);
      };

    

  return (
           <form className='FormQutote' onSubmit={handleSubmit}>
      <div>
        <Input
          required
          onChange={handleChange}
          name="name"
          size="large"
          placeholder="Your Name*"
        />
        <Input
          required
          onChange={handleChange}
          name="phone"
          size="large"
          placeholder="Your Phone*"
        />
      </div>
      <div>
        <Input.TextArea
          onChange={handleChange}
          name="info"
          size="large"
          showCount
          maxLength={100}
          placeholder="Can resize"
        />
      </div>
      <Button  type="primary" htmlType="submit">
        Submit
      </Button>
    </form>

  )
}

export default FormQutote