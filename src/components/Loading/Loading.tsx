import React from 'react'
import './Styles.less'

const Loading = () => {
    return (
        <div className="L-Container">
            <div className="L-TextContainer">
                <p className="L-Text">Estamos analizando tus datos para recomendarte las carreras que se ajustan a tus ideales.</p>
            </div>
            <br />
            <img src="../loading.svg" alt="loading" />
        </div>
    )
}

export default Loading
