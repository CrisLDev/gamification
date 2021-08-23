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
                    <li className="ED-Li">- Cómo descubrir necesidades y moticaviones del público de un negocio.</li>
                    <li className="ED-Li">- Cómo el producto / servicio se conecta con el público.</li>
                    <li className="ED-Li">- Estadística y análisis de datos para toma de decisiones.</li>
                    <li className="ED-Li">- Cómo trabajar en equipo (Sobretodo en pequeñas y medianas empresas).</li>
                    <li className="ED-Li">- Comportamiento y psicología del consumidor.</li>
                </ul>
            </div>
            <div>
                <h2>¿Razón?</h2>
                <ul className="ED-Ul">
                    <li className="ED-Li">- **No puedes** **conectar** negocios ** a personas que no conoces**.</li>
                    <li className="ED-Li">- No puedes conocer a las personas si no las analisas.</li>
                    <li className="ED-Li">- No puedes lograr esto sin saber a quién preguntar, a quién pedir información y a quién presentar las ideas en un equipo.</li>
                    <p>Recuerda: No se trata de ser creativo, se trata de hacer entender al público y lograr que conecte con el negocio y su equipo</p>
                </ul>
            </div>
            <div>
                <h2>Especialidades:</h2>
                <span>Se encuentran:</span>
                <ul className="ED-Ul">
                    <li className="ED-Li">- Growth marketing.</li>
                    <li className="ED-Li">- Marketing tradicional.</li>
                    <li className="ED-Li">- Marketing digital.
                        <ul>
                            <li>Sub especialidad: Redes sociales.</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div>
                <h2>Salarios que da la carrera:</h2>
                <ul className="ED-Ul">
                    <li className="ED-Li">- Al inicio, porque recién empiezas, tendrás el mínimo. Con suerte unos 100 dólares más que el mínimo. Pero, a medida que creces, los salarios están entre 350 dolares a 1,000.</li>
                </ul>
            </div>
            <div>
                <h2>Materias que van a ser importantes:</h2>
                <ul className="ED-Ul">
                    <li className="ED-Li">- ¿Interesado en estudiar la carrera?</li>
                </ul>
                <span>Aquí los 3 cursos a estar atento:</span>
                <ul className="ED-Ul">
                    <li className="ED-Li">- Probabilidad y estadística</li>
                    <li className="ED-Li">- Psicología del consumidor</li>
                    <li className="ED-Li">- Investigación de mercados</li>
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
