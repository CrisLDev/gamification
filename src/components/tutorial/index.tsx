import { Button, Col, Row, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Stepper } from 'react-form-stepper'

export const TutorialWelcome = () => {
    const [itemSpet, setItemSpet] = useState<number>(0);
    const navigate = useNavigate();
    const { Text } = Typography;

    useEffect(() => {
        setItemSpet(0);
    }, [])

    useEffect(() => {
        if(itemSpet >= 4){
            navigate('/app/career');
        }
    }, [itemSpet, navigate])

    return (
        <Stepper
        activeStep={itemSpet}
        connectorStateColors
        styleConfig={{
          activeBgColor: '#f097ac',
          activeTextColor: 'fff',
          completedBgColor: '#232f3e',
          completedTextColor: 'fff',
          inactiveBgColor: '#e0e0e0',
          inactiveTextColor: 'fff',
          size: '2em',
          circleFontSize: '1em',
          labelFontSize: '0.875rem',
          borderRadius: '50%',
          fontWeight: 500,
        }}
        connectorStyleConfig={{
          disabledColor: '#bdbdbd',
          activeColor: '#f097ac',
          completedColor: '#232f3e',
          size: 1,
          stepSize: '2em',
          style: 'solid',
        }}
      >
        <div>
            <div style={{ marginBottom: 10 }}>
                <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis totam vel, excepturi deserunt architecto non reiciendis ullam, dolore maiores cum, quidem vero voluptates debitis amet! Quae aliquid fugiat libero architecto!</Text>
                <img style={{ marginTop: 20 }} width='100%' src='../tutorial-1.svg' alt='svg totu 1' />
            </div>

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
                        {itemSpet === 3 ? 'Empezar' : 'Siguiente'}
                    </Button>
                </Col>
            </Row>
        </div>
      </Stepper>
    )
}