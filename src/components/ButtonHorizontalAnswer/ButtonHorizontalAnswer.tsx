import { Button } from 'antd';
import React from 'react'
import './Styles.less';

const ButtonHorizontalAnswerComponent = () => {
    return (
        <div className="BHAC-Root">
            <div className="BHAC-Button-Container">
                <hr className="BHAC-Line-Unifier" />
                <div className="BHAC-Button-Center">
                    <Button type="primary" shape="circle" size="large">
                        1
                    </Button>
                    <p>No</p>
                </div>
                <div className="BHAC-Button-Center">
                    <Button type="primary" shape="circle" size="large">
                        5
                    </Button>
                    <p>Me da igual</p>
                </div>
                <div className="BHAC-Button-Center">
                    <Button type="primary" shape="circle" size="large">
                        10
                    </Button>
                    <p>Si</p>
                </div>
            </div>
        </div>
    )
}

export default ButtonHorizontalAnswerComponent
