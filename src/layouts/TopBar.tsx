import { Link as RouterLink } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Button, Row, Col, Space } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import './topbar.less';
import { Dispatch, SetStateAction } from 'react';

interface IProps {
  onShowDrawer?: Dispatch<SetStateAction<boolean>>;
}

const TopBar = ({ onShowDrawer }: IProps) => {
  const closeSesion = () => {
    Cookies.remove('access-token-grama');
    window.location.href = '/login';
  };

  const handleClick = () => {
    onShowDrawer && onShowDrawer(true)
  }

  return (
    <header>
      <div className='head'>
      <Row justify="space-between" align="middle">
        <Col xs={20}>
          <RouterLink to='/app/home'>
            <div className="TB-LogoContainer">
              <img
                src='../gamifica.svg'
                alt='logo'
                className="TB-ImgFluid"
                width={260}
              />
            </div>
          </RouterLink>
        </Col>
        {onShowDrawer ? (
          <Col xs={4}>
          <Space className="TB-Flex-End">
            <Button className="TB-HamburgerButton" onClick={handleClick}>
              <img src="../Menu.svg" alt="hamburger" />
            </Button>
            <Button className="TB-LogOutButton" shape="circle" type='dashed' onClick={closeSesion}>
              <ArrowRightOutlined style={{ fontSize: 17 }} />
            </Button>
          </Space>
        </Col>
        ) : ''}
      </Row>
    </div>
    </header>
  );
};

export default TopBar;