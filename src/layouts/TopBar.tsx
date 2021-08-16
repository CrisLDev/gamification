import { Link as RouterLink } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Button, Row, Col } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import './topbar.less';

const TopBar = () => {
  const closeSesion = () => {
    Cookies.remove('access-token-grama');
    window.location.href = '/login';
  };

  return (
    <div className='head'>
      <Row justify="space-between">
        <Col xs={20}>
          <RouterLink to='/app/dashboard'>
            <img
              src='../Gamifica tu carrera.svg'
              alt='logo de cici'
              width={260}
            />
          </RouterLink>
        </Col>
        <Col xs={4}>
          <Button shape="circle" type='dashed' onClick={closeSesion}>
            <ArrowRightOutlined style={{ fontSize: 17 }} />
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default TopBar;