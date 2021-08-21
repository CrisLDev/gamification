import { Button, Col, Row } from 'antd'
import ButtonHorizontalAnswerComponent from '../../components/ButtonHorizontalAnswer/ButtonHorizontalAnswer'
import SelectQuestionComponent from '../../components/SelectQuestion/SelectQuestion'
import SquareQuestionComponent from '../../components/SquareQuestion/SquareQuestion'
import SquareTitleComponent from '../../components/SquareTitle/SquareTitle'
import './Styles.less'

const CareerView = () => {
    return (
        <>
        <Row>
            <Col span={24}>
                <SquareTitleComponent>
                    <>Exploremos tus gustos</>
                </SquareTitleComponent>
            </Col>
            <Col span={24}>
                <SquareQuestionComponent>
                    <>1. ¿Sientes curiosidad sobre cómo funcionan las computadoras por dentro?</>
                </SquareQuestionComponent>
            </Col>
            <Col span={24}>
                <ButtonHorizontalAnswerComponent />
            </Col>
            <Col span={24}>
                <SelectQuestionComponent another />
            </Col>
            <Col span={24} offset={14}>
                <Button className="C-ButonNex" type="primary" shape="round">
                    Siguiente
                </Button>
            </Col>
        </Row>
        </>
    )
}

export default CareerView
