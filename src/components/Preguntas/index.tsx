import { Row, Col } from 'antd';
import React from 'react';
import ButtonHorizontalAnswerComponent from '../ButtonHorizontalAnswer/ButtonHorizontalAnswer';
import {SelectQuestionComponent, TextareaComponent} from '../SelectQuestion/SelectQuestion';
import SquareQuestionComponent from '../SquareQuestion/SquareQuestion';
import SquareTitleComponent from '../SquareTitle/SquareTitle';

export interface Options {
    id: number,
    option: string,
}

export interface Pregunta {
    id: number,
    pregunta: string,
    type: "button" | "radio" | "radio && textarea" | "textarea" | string,
    options: Options[]
}

interface Props {
    pregunta: Pregunta
}

export const Question = ({ pregunta }: Props) => {
    const RenderInput = () => {
        switch(pregunta.type){
            case 'button':
                return <ButtonHorizontalAnswerComponent />
            case 'radio':
                return <SelectQuestionComponent options={pregunta.options} another={false} />
            case 'radio && textarea':
                return <SelectQuestionComponent options={pregunta.options} another />
            case 'textarea':
                return <TextareaComponent />
            default:
                return <p>No hay opciones</p>
        }
    }

    return (
        <Row>
            <Col span={24}>
                <SquareTitleComponent>
                    <>Exploremos tus gustos</>
                </SquareTitleComponent>
            </Col>
            <Col span={24}>
                <SquareQuestionComponent>
                    <>{pregunta.id}. {pregunta.pregunta}</>
                </SquareQuestionComponent>
            </Col>
            <Col span={24}>
                {RenderInput()}
            </Col>
        </Row>
    )
}