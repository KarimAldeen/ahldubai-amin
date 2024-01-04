import React from 'react';
import { Divider, Steps } from 'antd';

const App: React.FC = () => (
  <div className='Process'>
   <span>
   <Steps
      progressDot
      current={4}
      items={[
        {
          title:"Free Online consultation"
        },
        {

          title: 'Visit Scheduling and Travel Assistance',

        },
        {

          title: 'Proceeder ',
        },
        {
          title: 'Follow up',
        },
      ]}
    />
   </span>
    <Divider />
   <div>
     <Steps
      progressDot
      current={1}
      direction="vertical"
      items={[
        {
          title:"Free Online consultation"
        },
        {

          title: 'Visit Scheduling and Travel Assistance',

        },
        {

          title: 'Proceeder ',
        },
        {
          title: 'Follow up',
        },
      ]}
    />
   </div>
   <Divider />

  </div>
);

export default App;