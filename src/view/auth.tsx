import React, { useState } from 'react';
import { Button, Row, Col, notification, Input, Typography } from 'antd';
import '../styles/auth.less';
import { UserOutlined } from '@ant-design/icons';
import { loginWithGoogle } from '../util/firebase';
// import { LoginAccess } from '../api/users';
import Cookies from 'js-cookie';

interface User {
    email: string
    photoURL: string
    displayName: string
}

export const Auth = () => {
    const [Loading, setLoading] = useState<boolean>(false);
    const { Text } = Typography;

    const loginGoogle = () => {
        setLoading(true);

        loginWithGoogle()
            .then(async (user: User) => {
              const GoogleMe = {
                email: user.email,
                avatar: user.photoURL,
                userName: user.displayName,
                provider: 'google',
              };

              console.log(GoogleMe);

              // const responseLogin = await LoginAccess({ email: GoogleMe.email });
              Cookies.set('access-token-grama', 'responseLogin.data.me.token');
              window.location.href = '/app/home';
            }).catch((error) => {
              setLoading(false);
              notification['error']({
                message: 'Opps ocurrio un problema.',
                description: error.message,
              });
            });
      };

    return (
        <section className="container-auth">
            <Row justify="center">
                <Col xs={24}>
                  <img className='logo-app' src='slide-1.svg' alt='logo escritura' />
                </Col>
                <Col style={{ textAlign: 'center' }}>
                  <Button style={{ marginBottom: 10 }} type="primary" onClick={loginGoogle} loading={Loading}>ENTRAR CON GOOGLE</Button>
                  <br />
                  <Text>O</Text>
                  <br />
                  <Input type='email' style={{ marginTop: 10 }} size="middle" placeholder="Correo electronico" prefix={<UserOutlined />} />
                </Col>
            </Row>
        </section>
    )
}
