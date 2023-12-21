import { CommentOutlined, EyeFilled, HomeFilled, MenuOutlined, QuestionCircleFilled, StarFilled } from '@ant-design/icons';
import React from 'react';
import { FloatButton, Tooltip } from 'antd';

const FloatNav: React.FC = () => (

    <FloatButton.Group
        trigger="hover"
        type="primary"
        icon={<MenuOutlined />}
        className='FloatButton'
    >
            <Tooltip title="Home" placement='leftTop'>
        <FloatButton href='#Home' icon={<HomeFilled />} />

            </Tooltip>
              <Tooltip title="features" placement='leftTop'>
        <FloatButton href='#features' icon={<StarFilled />} />

            </Tooltip>

  <Tooltip title="aboutus" placement='leftTop'>
        <FloatButton href='#aboutus' icon={<EyeFilled />} />

            </Tooltip>
            
               <Tooltip title="questions" placement='leftTop'>
        <FloatButton href='#questions' icon={<QuestionCircleFilled />} />

            </Tooltip>
              <Tooltip title="contact" placement='leftTop'>
        <FloatButton href='#contact' icon={<CommentOutlined />} />

            </Tooltip>

    </FloatButton.Group>
);

export default FloatNav;