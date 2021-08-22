import { Question } from '../../components/Preguntas'
import { Stepper } from 'react-form-stepper'
import MarketingJson from '../../mock/questions-marketing.json';
import './Styles.less'
import { useState } from 'react';
import { Row, Col, Button, Typography } from 'antd';
import Loading from '../../components/Loading/Loading';
import EndData from '../../components/EndData/EndData';

const CareerView = () => {
    const [itemSpet, setItemSpet] = useState<number>(0);
    const [endData, setEndData] = useState(false);
    const { Text } = Typography;

    const setChangeData = () => {
        setTimeout(() => {
            setEndData(true);
            setItemSpet(16);
        }, 3000)
    }

    return (
        <section className={`container ${itemSpet === 15 ? 'bg-amarillo' : 'bg-blanco'}`}>
            {endData ? (
                <EndData />
            ) : (
                <>
                {itemSpet === 15 ? (
                <Loading/>
            ):  (
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
                                    className="btnBack"
                                    type='default'
                                    onClick={() => setItemSpet(itemSpet - 1)}
                                >
                                    Anterior
                                </Button>
                                )}
                            </Col>
                        <Col>
                            <Button
                                className="btn-siguiente"
                                onClick={() => {
                            if (itemSpet === 14){
                                setItemSpet(itemSpet + 1);
                                setChangeData()
                            } else{
                                setItemSpet(itemSpet + 1);
                            }
                            }}>
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
            )}
                </>
            )}
        </section>
    )
}

export default CareerView
