import { faStar as estrelaVazia } from '@fortawesome/free-regular-svg-icons';
import { faStar as estrelaCompleta } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Styles from '../../styles/skills.module.css';

export default function SkillRow({ Icone, item, qtdEstrelas, cor }) {
    const [qtdEstrelasVazias] = useState(10 - qtdEstrelas);

    return (
        <div className={Styles.row} title={`${qtdEstrelas} de 10`}>
            <p style={{ color: cor }}>
                {Icone && <i><FontAwesomeIcon icon={Icone} size='sm' /></i>}
            </p>

            <p >
                <span className={Styles.heading} style={{ color: '#555555' }}>{item}</span>
            </p>

            <div className={Styles.stars} style={{ color: '#555555' }}>
                {[...Array(qtdEstrelas)].map((x, i) =>
                    <i key={i}><FontAwesomeIcon icon={estrelaCompleta} size='sm' /></i>
                )}

                {[...Array(qtdEstrelasVazias)].map((x, i) =>
                    <i key={i}><FontAwesomeIcon icon={estrelaVazia} size='sm' /></i>
                )}
            </div>
        </div>

    )
}
