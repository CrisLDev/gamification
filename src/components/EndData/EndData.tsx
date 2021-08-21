import { Col, Row } from 'antd'
import React from 'react'
import './Styles.less'

const EndData = () => {
    return (
        <div className="ED-Container">
            <h1>Marqueting</h1>
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
                <Row>
                    <Col span={5}>
                        <div className="ED-AvatarContainer">
                            <img className="ED-FluidImg" src="../elwe.png" alt="loading" />
                        </div>
                    </Col>
                    <Col span={12}  offset={7}>
                            <p>Habla con Augusto Huerta.</p>
                            <p>Estudiante de marketing y administración en la UPN.</p>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default EndData
