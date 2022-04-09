import React from 'react';
import Styles from '../../styles/timeline.module.css';

export default function Acontecimento({ tempo, titulo }) {
    return (
        <li className={Styles.timelineItem}>
            <div className={Styles.timelineInfo}>
                <span>{tempo}</span>
            </div>

            <div className={Styles.timelineMarker}></div>

            <div className={Styles.timelineContent}>
                <h3 className={Styles.timelineTitle}>{titulo}</h3>

                {/* {descricao && (<p>{descricao}</p>)} */}
            </div>
        </li>
    )
}
