import { Question } from '../../components/Preguntas'
import { Stepper } from 'react-form-stepper'
import MarketingJson from '../../mock/questions-marketing.json';
import './Styles.less'
import { useState } from 'react';
import { Row, Col, Button, Typography } from 'antd';

const CareerView = () => {
    const [itemSpet, setItemSpet] = useState<number>(0);
    const { Text } = Typography;

    return (
        <section className='container'>
            <Stepper
                activeStep={itemSpet}
                connectorStateColors
            >
                <div>
                    {MarketingJson.map((item, index) => index === itemSpet && <Question key={item.id} pregunta={item} />)}
                    <br />
                    <br />
                    <Row justify='space-between'>
                        <Col>
                            {itemSpet > 0 && (
                                <Button
                                    type='default'
                                    onClick={() => setItemSpet(itemSpet - 1)}
                                >
                                    Anterior
                                </Button>
                                )}
                            </Col>
                        <Col>
                            <Button
                                type='primary'
                                onClick={() => setItemSpet(itemSpet + 1)}
                            >
                                {MarketingJson.length === itemSpet + 1 ? 'Terminar' : 'Siguiente'}
                            </Button>
                        </Col>
                        <Col xs={24}>
                            <br />
                            <Text>{itemSpet + 1} / {MarketingJson.length} Preguntas</Text>
                        </Col>
                    </Row>
                </div>
            </Stepper>
        </section>
    )
}

export default CareerView
