import { Row, Col, Typography, notification, Button } from 'antd';
import React, { Dispatch, SetStateAction } from 'react';
import { SelectOption } from '../../view/Career/career';
import ButtonHorizontalAnswerComponent from '../ButtonHorizontalAnswer/ButtonHorizontalAnswer';
import {SelectQuestionComponent, TextareaComponent} from '../SelectQuestion/SelectQuestion';
import SquareQuestionComponent from '../SquareQuestion/SquareQuestion';
import SquareTitleComponent from '../SquareTitle/SquareTitle';

export interface Options {
    id: string,
    option: string,
}

export interface Pregunta {
    id: number,
    pregunta: string,
    type: "button" | "radio" | "radio && textarea" | "textarea" | string,
    options: Options[]
}

interface Props {
    setSelectOptions: Dispatch<SetStateAction<SelectOption[]>>;
    setEndData: Dispatch<SetStateAction<boolean>>;
    setItemSpet: Dispatch<SetStateAction<number>>;
    selectOptions: SelectOption[];
    itemSpet: number;
    length: number;
    index: number;
    pregunta: Pregunta
}

export const Question = ({ pregunta, selectOptions, length, index, setEndData, itemSpet, setItemSpet, setSelectOptions }: Props) => {
    const { Text } = Typography;

    const RenderInput = () => {
        switch(pregunta.type){
            case 'button':
                return <ButtonHorizontalAnswerComponent />
            case 'radio':
                return <SelectQuestionComponent index={index} pregunta={pregunta.id} selectOptions={selectOptions} setSelectOptions={setSelectOptions} options={pregunta.options} another={false} />
            case 'radio && textarea':
                return <SelectQuestionComponent index={index} pregunta={pregunta.id} selectOptions={selectOptions} setSelectOptions={setSelectOptions} options={pregunta.options} another />
            case 'textarea':
                return <TextareaComponent />
            default:
                return <p>No hay opciones</p>
        }
    }

    const setChangeData = () => {
        setTimeout(() => {
            setEndData(true);
            setItemSpet(16);
        }, 3000)
    }

    const handleNext = () => {
        const valid = !selectOptions.find(item => item.pregunta === pregunta.id) && pregunta.id > 3;
        if(valid && index !== 12 && index !== 14){
            notification['warning']({
                message: 'No tan deprisa 😰',
                description: 'Selecciona una respuesta',
            });
            return;
        }

        if (itemSpet === 14){
            setItemSpet(itemSpet + 1);
            setChangeData()
        } else{
            setItemSpet(itemSpet + 1);
        }
    }

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
                        <>{pregunta.id}. {pregunta.pregunta}</>
                    </SquareQuestionComponent>
                </Col>
                <Col span={24}>
                    {RenderInput()}
                </Col>
            </Row>

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
                        onClick={handleNext}>
                        {length === itemSpet + 1 ? 'Terminar' : 'Siguiente'}
                    </Button>
                </Col>
                <Col xs={24}>
                    <br />
                    <Text>{itemSpet + 1} / {length} Preguntas</Text>
                </Col>
            </Row>
        </>
    )
}
