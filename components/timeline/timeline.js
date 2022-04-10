import React from 'react';
import Styles from '../../styles/timeline.module.css';
import Acontecimento from './acontecimento';

export default function Timeline() {
    return (
        <ul className={Styles.timeline}>
            <Acontecimento
                tempo='Maio de 2017 — Fevereiro de 2018'
                titulo='Estagiário de desenvolvimento de software — Apolo Tubulars'
            />
            <Acontecimento
                tempo='Fevereiro de 2018 — Maio de 2021'
                titulo='Assistente de desenvolvimento de software — Apolo Tubulars'
            />

            <Acontecimento
                tempo='Maio de 2021 — Presente'
                titulo='Analista de desenvolvimento fullstack pleno, .NET — Intituto de Pesquisa e Planejamento de São José dos Campos'
            />

            <li className={`${Styles.timelineItem} ${Styles.period}`}>
                <div className={Styles.timelineInfo}></div>
                <div className={Styles.timelineMarker}></div>
            </li>
        </ul>
    )
}
