import { Outlet } from 'react-router-dom';
import TopBar from './TopBar';
import './layout.less';

export const DashboardLayout = () => {
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
