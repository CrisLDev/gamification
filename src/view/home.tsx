import { Row, Col, Button, Typography, Modal } from 'antd';
import React, { useState } from 'react';
import { TutorialWelcome } from '../components/tutorial';

export const HomeView = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const { Text } = Typography;

    const init = () => {
        setVisible(true);
    }

    return (
        <section className="container">
            <Row justify="center">
                <Col xs={24} style={{ textAlign: 'center' }}>
                    <Text style={{ fontSize: 18 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eos voluptas illo iure cumque sequi sed, sapiente officia quisquam delectus ipsam iusto ipsa, eum explicabo laboriosam consequatur. Nesciunt, fugit ut!</Text>
                    <img width='90%' src='../slide-2.svg' alt='comenzemos' />
                </Col>
                <Col xs={24}>
                    <Button style={{ float: 'right' }} type="primary" onClick={init}>Comenzemos</Button>
                </Col>
            </Row>

            <Modal title="Antes de empezar" footer={null} visible={visible} onOk={() => console.log('ok')} onCancel={() => setVisible(false)}>
                <TutorialWelcome />
            </Modal>
        </section>
    )
}