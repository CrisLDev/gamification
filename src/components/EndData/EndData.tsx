import { Col, Row } from 'antd'
import React from 'react'
import { TwitterOutlined } from '@ant-design/icons';
import './Styles.less'
import FeedbackButton from '../FeedbackButton/FeedbackButton';

const EndData = () => {
    return (
        <div className="ED-Container">
            <FeedbackButton />
            <h1>Marketing</h1>
            <div>
                <img className="ED-FluidImg" src="../slide 20.svg" alt="loading" />
            </div>
            <div>
                <h2>Conocimientos que debes saber:</h2>
                <p>Sí o Sí, estas son las habilidades básicas a tener:</p>
                <ul className="ED-Ul">
                    <li className="ED-Li">- Cómo descubrir necesidades y motivaciones del público de un negocio.</li>
                    <li className="ED-Li">- Cómo el producto / servicio se conecta con el público.</li>
                    <li className="ED-Li">- Estadística y análisis de datos para toma de decisiones.</li>
                    <li className="ED-Li">- Cómo trabajar en equipo (Sobretodo en pequeñas y medianas empresas).</li>
                    <li className="ED-Li">- Comportamiento y psicología del consumidor.</li>
                </ul>
            </div>
            <div>
                <h2>¿Razón?</h2>
                <ul className="ED-Ul">
                    <span>-No puedes conectar negocios a personas que no conoces.</span>
                    <li className="ED-Li">- No puedes conocer a las personas si no las analisas.</li>
                    <li className="ED-Li">- No puedes lograr esto sin saber a quién preguntar, a quién pedir información y a quién presentar las ideas en un equipo.</li>
                    <p></p>
                    <p>Recuerda: No se trata de ser creativo, se trata de hacer entender al público y lograr que conecte con el negocio y su equipo</p>
                </ul>
            </div>
            <div>
                <h2>Especialidades:</h2>
                <p>Se encuentran:</p>
                <ul className="ED-Ul">
                    <li className="ED-Li">- Growth marketing.</li>
                    <li className="ED-Li">- Marketing tradicional.</li>
                    <li className="ED-Li" style={{display: 'block'}}>- Marketing digital.
                        <div>
                            <ul>
                                <li>Subespecialidad: Redes sociales.</li>
                            </ul>
                        </div>
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
                <p>Aquí los 3 cursos a estar atento:</p>
                <ul className="ED-Ul">
                    <li className="ED-Li">- Probabilidad y estadística</li>
                    <li className="ED-Li">- Psicología del consumidor</li>
                    <li className="ED-Li">- Investigación de mercados</li>
                </ul>
            </div>
            <div className="ED-FooterMarketer">
                <h2>Contactate con un Marketer</h2>
                <Row justify='space-between'>
                    <Col xs={6} md={12} className="ED-ANTColCentered">
                        <figure className="ED-AvatarContainer">
                            <img className="ED-FluidImg" src="../elwe.png" alt="loading" />
                        </figure>
                    </Col>
                    <Col span={1}></Col>
                    <Col xs={17} md={11}>
                        <p style={{ fontSize: 15, color: '#fff' }}>Habla con Augusto Huerta, estudiante de marketing y administración en la PN.</p>
                    </Col>
                    <Col></Col>
                    <Col xs={10} md={12} style={{ textAlign: 'center' }}>
                        <TwitterOutlined style={{ fontSize: 30, marginRight: 6, color: '#fff' }} />
                        <span style={{ color: '#fff' }}>@AugustoHuerta1</span>
                    </Col>
                    <Col xs={10} md={12} style={{ textAlign: 'center' }} className="ED-SetBottom">
                        <img src="../telegram.svg" alt="telegramIcon" className="ED-MarginRight" />
                        <span style={{ color: '#fff' }}>@UMobdream999</span>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default EndData
