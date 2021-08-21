import { Outlet } from 'react-router-dom';
import TopBar from './TopBar';
import './layout.less';
import React from 'react';

export const DashboardMain = () => {
  return (
    <div className='root'>
      <TopBar />
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
