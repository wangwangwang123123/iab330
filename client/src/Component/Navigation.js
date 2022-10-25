import React from 'react'
import { TabBar, Badge } from 'antd-mobile'
import {
  AppOutline,
  UnorderedListOutline,

  TeamOutline,
  LeftOutline
} from 'antd-mobile-icons'
import { useNavigate, useLocation, } from 'react-router-dom';

import './Navigation.css';

function Navigation() {
  const Navigation = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const setRouteActive = (value) => {
    console.log(value)
    Navigation(value);
  };
  const tabs = [
    {
      key: 'home',
      title: 'Home',
      icon: <AppOutline />,

      

    },
    {
      key: 'totalAmount',
      title: 'TotalAmount',
      icon: <UnorderedListOutline />,
    },
    {
      key: 'RoomList',
      title: 'RoomList',
      icon: <TeamOutline />,
     
    },
    {
      key: 'Home',
      title: 'Back',
      icon: <LeftOutline />,
    },
  ];
  return (
    <div>


      <TabBar
        className='TabBar'
        activeKey={pathname} onChange={value => setRouteActive(value)}
      >
        {tabs.map(item => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>

    </div>
  )
}
export default Navigation

