import { Link as RouterLink } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Button, Row, Col, Space } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import './topbar.less';

interface IProps {
  onShowDrawer: () => void;
}

const TopBar: React.FC<IProps> = (props) => {
  const {onShowDrawer} = props;
  const closeSesion = () => {
    Cookies.remove('access-token-grama');
    window.location.href = '/login';
  };

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
        <Col xs={4}>
          <Space className="TB-Flex-End">
            <Button className="TB-HamburgerButton" onClick={onShowDrawer}>
              <img src="../Menu.svg" alt="hamburger" />
            </Button>
            <Button className="TB-LogOutButton" shape="circle" type='dashed' onClick={closeSesion}>
              <ArrowRightOutlined style={{ fontSize: 17 }} />
            </Button>
          </Space>
        </Col>
      </Row>
    </div>
    </header>
  );
};

export default TopBar;