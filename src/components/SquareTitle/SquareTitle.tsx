import React from 'react'
import './Styles.less';

interface IProps {
    children: JSX.Element;
}

const SquareTitleComponent: React.FC<IProps> = (props) => {
    const {children} = props;
    return (
        <div className="STC-Root">
            <h3 className="STC-H3" style={{ color: '#fff' }}>
                {children}
            </h3>
        </div>
    )
}

export default SquareTitleComponent
