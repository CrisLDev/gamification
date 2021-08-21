import { Input } from 'antd';
import React from 'react'
import './Styles.less';

interface IPorps {
    another?: boolean;
}

const SelectQuestionComponent: React.FC<IPorps> = (props) => {
    const {another = false} = props;

    const [prepareToJustify, setPrepareToJustify] = React.useState(false);

    const [justifycation, setJustifycation] = React.useState('');

    const [value, setValue] = React.useState(1);

    const onChange = (e: any) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    return (
        <div className="SQ-Root">
            <label className="SQ-RadioContainer">
                <input className="SQ-Radio" name="answer" type="radio" onClick={() => setPrepareToJustify(false)} />
                <h3>Si.</h3>
            </label>
            <label className="SQ-RadioContainer">
                <input className="SQ-Radio" name="answer" type="radio" onClick={() => setPrepareToJustify(false)} />
                <h3>No.</h3>
            </label>
            <label className="SQ-RadioContainer">
                <input className="SQ-Radio" name="answer" type="radio" onClick={() => setPrepareToJustify(false)} />
                <h3>No estoy seguro.</h3>
            </label>
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

export default SelectQuestionComponent
