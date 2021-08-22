import { Row, Col, Button, Typography, Modal } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { TutorialWelcome } from '../components/tutorial';

export const HomeView = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const { Text } = Typography;
    const navigate = useNavigate();

    return (
        <section className="container">
            <Row justify="center">
                <Col xs={24} style={{ textAlign: 'center' }}>
                    <Text style={{ fontSize: 18, padding: 5 }}>Descubre las diferentes habilidades
                        que tienes y explora tus opciones
                        para trabajar en lo que más te guste
                    </Text>
                    <img width='90%' src='../slide-2.svg' alt='comenzemos' />
                </Col>
                <Col xs={24}>
                    <Button style={{ float: 'right', marginRight: 10 }} type="primary" onClick={() => navigate('/app/career')}>Comenzemos</Button>
                </Col>
            </Row>

            <Modal title="Antes de empezar" footer={null} visible={visible} onOk={() => console.log('ok')} onCancel={() => setVisible(false)}>
                <TutorialWelcome />
            </Modal>
        </section>
    )
}