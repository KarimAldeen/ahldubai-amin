import React from 'react';
import { Divider, Steps } from 'antd';
import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { MdDirectionsRun, MdOnlinePrediction, MdOutlineDataSaverOn } from 'react-icons/md';

const App: React.FC = () => (
  <div className='Process'>
   <span>
   <Steps
      current={4}
      items={[
        {
          description:"Free Online consultation",
          icon: <MdOnlinePrediction />,
          status: 'finish',

        },
        {

          icon: <SolutionOutlined />,
          status: 'finish',
          description:'Visit Scheduling and Travel Assistance',


        },
        {

          description: 'Proceeder ',
          icon: <MdOutlineDataSaverOn />
          ,
          status: 'finish',
        },
        {
          description: 'Follow up',
          icon: <MdDirectionsRun />
          ,
          status: 'finish',
        },
      ]}
    />

   </span>
    <Divider />
   <div>
     <Steps
      current={1}
      direction="vertical"
      items={[
        {
          description:"Free Online consultation",
          icon: <MdOnlinePrediction />,
          status: 'finish',

        },
        {

          icon: <SolutionOutlined />,
          status: 'finish',
          description:'Visit Scheduling and Travel Assistance',


        },
        {

          description: 'Proceeder ',
          icon: <MdOutlineDataSaverOn />
          ,
          status: 'finish',
        },
        {
          description: 'Follow up',
          icon: <MdDirectionsRun />
          ,
          status: 'finish',
        },
      ]}
    />
   </div>
   <Divider />

  </div>
);

export default App;