import React from 'react';
import { ConfigProvider, Tabs } from 'antd';

const { TabPane } = Tabs;

interface TabData {
  key: string;
  label: string;
  component: React.ReactNode;
  icon : any
}

interface ResposiveTabsProps {
  tabsData: TabData[];
}

const ResposiveTabs: React.FC<ResposiveTabsProps> = ({ tabsData }) => (
    <ConfigProvider
    theme={{
      components: {
        Tabs: {
            itemSelectedColor: 'var(--secondary)', 
            inkBarColor:"var(--secondary)"
        },
      },
    }}
  >
  <Tabs defaultActiveKey="1"  >
    {tabsData.map((tab) => (
      <TabPane  tab={tab.label}  key={tab.key}>
        {tab.component}
      </TabPane>
    ))}
  </Tabs>
  </ConfigProvider>
);

export default ResposiveTabs;
