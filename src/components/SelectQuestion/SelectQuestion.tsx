import { Input } from 'antd';
import React, { Dispatch, SetStateAction } from 'react'
import { SelectOption } from '../../view/Career/career';
import { Options } from '../Preguntas';
import './Styles.less';

interface IPorps {
    another?: boolean;
    options: Options[];
    setSelectOptions: Dispatch<SetStateAction<SelectOption[]>>;
    selectOptions: SelectOption[];
    index: number;
    pregunta: number;
}

export const SelectQuestionComponent = ({ another, options, selectOptions, setSelectOptions, index, pregunta }: IPorps) => {
    const [prepareToJustify, setPrepareToJustify] = React.useState(false);

    const handleSelect = (option: string) => {
        const filterSelect = selectOptions.filter(item => item.index !== index);
        setSelectOptions([...filterSelect, {option, pregunta, index}])
    }

    return (
        <div className="SQ-Root">
            {options.map((item) => (
                <label className="SQ-RadioContainer" key={item.id}>
                    <input className="SQ-Radio" name="answer" type="radio" onClick={() => handleSelect(item.id)} />
                    <h3>{item.option}.</h3>
                </label>
            ))}
            {another && (
                <div>
                    <label className="SQ-RadioContainer">
                        <input className="SQ-Radio" name="answer" type="radio" onClick={() => setPrepareToJustify(true)} />
                        <h3>Otro.</h3>
                    </label>
                    {prepareToJustify && (
                        <div className="SQ-JustificationInput">
                            <Input placeholder="Escribe tu opinión." />
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export const TextareaComponent = () => {
    const { TextArea } = Input;
    return (
        <div style={{ border: '1px solid #cdcdcd', borderRadius: 30 }}>
            <TextArea placeholder='Escribe tu comentario...' required rows={4} />
        </div>
    )
}