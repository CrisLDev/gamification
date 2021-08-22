import { Outlet } from 'react-router-dom';
import TopBar from './TopBar';
import './layout.less';
import Sidebar from './Sidebar';
import React from 'react';

export const DashboardLayout = () => {
  const [visible, setVisible] = React.useState(false);
  
  return (
    <div className='root'>
      <TopBar onShowDrawer={setVisible} />
      <Sidebar visible={visible} onCloseDrawer={() => setVisible(false)} />
      <div className='wrapper'>
        <div className='contentContainer'>
          <div className='content'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
