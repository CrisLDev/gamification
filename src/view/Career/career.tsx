import { Question } from '../../components/Preguntas'
import { Stepper } from 'react-form-stepper'
import QuestionsJson from '../../mock/questions.json';
import './Styles.less'
import { useEffect, useState } from 'react';
import Loading from '../../components/Loading/Loading';
import EndData from '../../components/EndData/EndData';

export interface SelectOption {
    index: number
    pregunta: number
    option: string
}

const CareerView = () => {
    const [itemSpet, setItemSpet] = useState<number>(0);
    const [selectOptions, setSelectOptions] = useState<SelectOption[]>([]);
    const [endData, setEndData] = useState(false);

    useEffect(() => {
        console.log(selectOptions);
    }, [selectOptions])

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
                    {QuestionsJson.map((item, index) => index === itemSpet && 
                    <Question 
                        setSelectOptions={setSelectOptions} 
                        selectOptions={selectOptions} 
                        key={item.id}
                        index={index}
                        length={QuestionsJson.length}
                        itemSpet={itemSpet}
                        setEndData={setEndData}
                        setItemSpet={setItemSpet}
                        pregunta={item} 
                    />)}
                </div>
            </Stepper>
            )}
                </>
            )}
        </section>
    )
}

export default CareerView
