import React, { useContext } from 'react'
import { Button, Drawer, Avatar, Typography } from 'antd';
import Cookies from 'js-cookie';
import { Link as RouterLink } from 'react-router-dom';
import './Sidebar.less';
import { MeContext } from '../context/contextMe';
import { AVATAR_DEFAULT } from '../api';

interface IProps {
    visible: boolean;
    onCloseDrawer: () => void;
}

const Sidebar: React.FC<IProps> = (props) => {
  const { Text } = Typography;
  const { me } = useContext(MeContext);

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
          <div style={{ textAlign: 'center' }}>
            <Avatar size={64} src={me.avatar || AVATAR_DEFAULT} />
            <br />
            <Text>{me.email}</Text>
          </div>
          <br />
          <Button block type='dashed' onClick={closeSesion}>
              Cerrar Sesión
            </Button>
        </Drawer>
        </>
    )
}

export default Sidebar
