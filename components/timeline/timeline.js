import React, { useContext, useEffect, useState } from 'react';
import Styles from '../../styles/timeline.module.css';
import { IdiomaContext } from '../../utils/context/idiomaContext';
import ConteudoTimeline from '../../utils/traducao/conteudoTimeline';
import Acontecimento from './acontecimento';

export default function Timeline() {
    const [idiomaContext] = useContext(IdiomaContext);
    const [conteudo, setConteudo] = useState(ConteudoTimeline(idiomaContext));

    useEffect(() => {
        // console.log(idiomaContext);
        setConteudo(ConteudoTimeline(idiomaContext));
    }, [idiomaContext]);

    return (
        <ul className={Styles.timeline}>
            <Acontecimento
                tempo={conteudo[0]}
                titulo={conteudo[1]}
            />
            <Acontecimento
                tempo={conteudo[2]}
                titulo={conteudo[3]}
            />

            <Acontecimento
                tempo={conteudo[4]}
                titulo={conteudo[5]}
            />

            <li className={`${Styles.timelineItem} ${Styles.period}`}>
                <div className={Styles.timelineInfo}></div>
                <div className={Styles.timelineMarker}></div>
            </li>
        </ul>
    )
}
