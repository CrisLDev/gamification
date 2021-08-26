import AnswersJson from '../mock/answers.json';
import { SelectOption } from '../view/Career/career';

interface Cal {
    carrera: string;
    puntos: number;
}

export const CalcularResultado = async (selectOptions: SelectOption[]) => {
    let carreras: Cal[] = [];

    for(let i = 0; i < selectOptions.length; i++){
        let itemSelect = selectOptions[i];

        for(let j = 0; j < AnswersJson.length; j++){
            let itemAnswers = AnswersJson[j];

            for(let k = 0; k < itemAnswers.opcionesByPregunta.length; k++){
                let itemOptionByQuestion = itemAnswers.opcionesByPregunta[k];
                const isQuestion = itemSelect.pregunta === itemOptionByQuestion.id;
                const isOption = itemOptionByQuestion.opciones.includes(itemSelect.option);

                if(isQuestion && isOption){
                    const FindCarrera = carreras.find(item => item.carrera === itemAnswers.carrera);

                    if(!FindCarrera){
                        carreras.push({
                            carrera: itemAnswers.carrera,
                            puntos: 1
                        });
                    }else{
                        const update = {
                            carrera: itemAnswers.carrera,
                            puntos: FindCarrera.puntos + 1
                        };

                        const filterCarrers = carreras.filter(item => item.carrera !== itemAnswers.carrera);
                        carreras = [...filterCarrers, update];
                    }
                }
            }
        }
    }

    const winner = carreras.reduce((a, b) => (a.puntos > b.puntos) ? a : b);
    return winner.carrera || 'sin ganador';
}
