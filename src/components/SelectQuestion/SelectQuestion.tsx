import { Input } from 'antd';
import React from 'react'
import { Options } from '../Preguntas';
import './Styles.less';

interface IPorps {
    another?: boolean;
    options: Options[];
}

export const SelectQuestionComponent = ({ another, options }: IPorps) => {
    const [prepareToJustify, setPrepareToJustify] = React.useState(false);

    return (
        <div className="SQ-Root">
            {options.map(item => (
                <label className="SQ-RadioContainer" key={item.id}>
                    <input className="SQ-Radio" name="answer" type="radio" onClick={() => setPrepareToJustify(false)} />
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