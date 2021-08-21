import { Col, Row } from 'antd'
import React from 'react'
import { TwitterOutlined, WhatsAppOutlined } from '@ant-design/icons';
import './Styles.less'

const EndData = () => {
    return (
        <div className="ED-Container">
            <h1>Marketing</h1>
            <div>
                <img className="ED-FluidImg" src="../slide 20.svg" alt="loading" />
            </div>
            <div>
                <h2>Conocimientos que debes saber:</h2>
                <span>Si o sí, estas son las habilidades básicas a tener:</span>
                <ul className="ED-Ul">
                    <li className="ED-Li">- al go coherente.</li>
                    <li className="ED-Li">- al go coherente.</li>
                    <li className="ED-Li">- al go coherente.</li>
                    <li className="ED-Li">- al go coherente.</li>
                    <li className="ED-Li">- al go coherente.</li>
                    <li className="ED-Li">- al go coherente.</li>
                    <li className="ED-Li">- al go coherente.</li>
                </ul>
            </div>
            <div>
                <h2>¿Razón?</h2>
                <span>Si o sí, estas son las habilidades básicas a tener:</span>
                <ul className="ED-Ul">
                    <li className="ED-Li">- al go coherente.</li>
                    <li className="ED-Li">- al go coherente.</li>
                    <li className="ED-Li">- al go coherente.</li>
                    <li className="ED-Li">- al go coherente.</li>
                    <li className="ED-Li">- al go coherente.</li>
                    <li className="ED-Li">- al go coherente.</li>
                    <li className="ED-Li">- al go coherente.</li>
                </ul>
            </div>
            <div>
                <h2>Conocimientos que debes saber:</h2>
                <span>Si o sí, estas son las habilidades básicas a tener:</span>
                <ul className="ED-Ul">
                    <li className="ED-Li">- al go coherente.</li>
                    <li className="ED-Li">- al go coherente.</li>
                    <li className="ED-Li">- al go coherente.</li>
                    <li className="ED-Li">- al go coherente.</li>
                    <li className="ED-Li">- al go coherente.</li>
                    <li className="ED-Li">- al go coherente.</li>
                    <li className="ED-Li">- al go coherente.</li>
                </ul>
            </div>
            <div>
                <h2>Conocimientos que debes saber:</h2>
                <span>Si o sí, estas son las habilidades básicas a tener:</span>
                <ul className="ED-Ul">
                    <li className="ED-Li">- al go coherente.</li>
                    <li className="ED-Li">- al go coherente.</li>
                    <li className="ED-Li">- al go coherente.</li>
                    <li className="ED-Li">- al go coherente.</li>
                    <li className="ED-Li">- al go coherente.</li>
                    <li className="ED-Li">- al go coherente.</li>
                    <li className="ED-Li">- al go coherente.</li>
                </ul>
            </div>
            <div className="ED-FooterMarketer">
                <h2>Contactate con un Marketer</h2>
                <Row justify='space-between'>
                    <Col xs={6} md={12}>
                        <figure className="ED-AvatarContainer">
                            <img className="ED-FluidImg" src="../elwe.png" alt="loading" />
                        </figure>
                    </Col>
                    <Col span={1}></Col>
                    <Col xs={17} md={11}>
                        <p style={{ fontSize: 15 }}>Habla con Augusto Huerta, estudiante de marketing y administración en la UPN.</p>
                    </Col>
                    <Col></Col>
                    <Col xs={10} md={12}>
                        <TwitterOutlined style={{ fontSize: 30, marginRight: 6 }} />
                        @Username
                    </Col>
                    <Col xs={10} md={12}>
                        <WhatsAppOutlined style={{ fontSize: 30, marginRight: 6 }} />
                        @Username
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default EndData
