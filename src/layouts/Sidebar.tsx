import React from 'react'
import { Button, Drawer } from 'antd';
import Cookies from 'js-cookie';
import { Link as RouterLink } from 'react-router-dom';
import './Sidebar.less';

interface IProps {
    visible: boolean;
    onCloseDrawer: () => void;
}

const Sidebar: React.FC<IProps> = (props) => {

    const {visible, onCloseDrawer} = props;

    const closeSesion = () => {
      Cookies.remove('access-token-grama');
      window.location.href = '/login';
    };

    return (
        <>
        <Drawer
          title={
            <RouterLink to='/app/dashboard'>
            <img
              src='../gamifica.svg'
              alt='logo'
              className="S-ImgFluid"
              width={260}
            />
          </RouterLink>
          }
          placement={'left'}
          closable={false}
          onClose={onCloseDrawer}
          visible={visible}
          key={'left'}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <Button block type='dashed' onClick={closeSesion}>
              Cerrar Sesión
            </Button>
        </Drawer>
        </>
    )
}

export default Sidebar
