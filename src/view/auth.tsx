import React, { useContext, useState } from 'react';
import { Button, Row, Col, notification, Input, Typography } from 'antd';
import '../styles/auth.less';
import { UserOutlined } from '@ant-design/icons';
import { loginWithGoogle } from '../util/firebase';
import { LoginAccess } from '../api/users';
import Cookies from 'js-cookie';
import { MeContext } from '../context/contextMe';

interface User {
    email: string
    photoURL: string
    displayName: string
}

export const Auth = () => {
    const { setMe } = useContext(MeContext);
    const [Loading, setLoading] = useState<boolean>(false);
    const [LoadingEmail, setLoadingEmail] = useState<boolean>(false);
    const [KeyEmail, setKeyEmail] = useState<string>('');
    const { Text } = Typography;

    const loginGoogle = () => {
        setLoading(true);

        loginWithGoogle()
            .then(async (user: User) => {
              const GoogleMe = {
                email: user.email,
                avatar: user.photoURL,
                userName: user.displayName,
              };

              const responseLogin = await (await LoginAccess({ data: GoogleMe })).data;
              setMe(responseLogin.me.user);

              Cookies.set('access-token-grama', responseLogin.me.token);
              window.location.href = '/app/home';
            }).catch((error) => {
              setLoading(false);
              notification['error']({
                message: 'Opps ocurrio un problema.',
                description: error.message,
              });
            });
      };

      const handleEmail = async () => {
        setLoadingEmail(true);

        try {
          if(KeyEmail.indexOf('@') === -1 || KeyEmail.indexOf('.') === -1){
            notification['error']({
              message: 'Opps ocurrio un problema.',
              description: 'Escriba una dirección de correo valida',
            });
            setLoadingEmail(false);
            return;
          }

          const data = {
            email: KeyEmail,
          }

          const responseLogin = await (await LoginAccess({ data })).data;
          setMe(responseLogin.me.user);

          Cookies.set('access-token-grama', responseLogin.me.token);
          window.location.href = '/app/home';
        } catch (error: any) {
          setLoadingEmail(false);
          notification['error']({
            message: 'Opps ocurrio un problema.',
            description: error.message,
          });
        }
      }

    return (
        <section className="container-auth">
            <Row justify="center">
                <Col xs={24}>
                  <h3 style={{ fontSize: 24, color: '#000', textAlign: 'center', padding: 10 }}>Descubre tu pasión, encuentra tu profesión.</h3>
                </Col>
                <Col xs={24} style={{ textAlign: 'center' }}>
                  <img className='logo-app' src='slide-1.svg' alt='logo escritura' />
                </Col>
                <Col style={{ textAlign: 'center' }}>
                  <Button block style={{ marginBottom: 10 }} type="primary" onClick={loginGoogle} loading={Loading}>ENTRAR CON GOOGLE</Button>
                  <br />
                  <Text>O</Text>
                  <br />
                  <Input onChange={event => setKeyEmail(event.target.value)} type='email' style={{ marginTop: 10 }} size="middle" placeholder="Correo electronico" prefix={<UserOutlined />} />
                  <br />
                  <Button loading={LoadingEmail} block onClick={handleEmail} style={{ marginTop: 10 }} type="primary">Entrar</Button>
                </Col>
            </Row>
        </section>
    )
}
