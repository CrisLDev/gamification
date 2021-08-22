import React from 'react'
import './Styles.less';

interface IProps {
    children: JSX.Element;
}

const SquareQuestionComponent: React.FC<IProps> = (props) => {
    const {children} = props;
    return (
        <div className="SQC-Root">
            <h3 className="SQC-H3">
                {children}
            </h3>
        </div>
    )
}

export default SquareQuestionComponent
