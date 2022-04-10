import React, { useContext, useEffect, useState } from 'react';
import Styles from '../../styles/index.module.css';
import { IdiomaContext } from '../../utils/context/idiomaContext';
import ConteudoSessao4 from '../../utils/traducao/conteudoSessao4';
import Timeline from '../timeline/timeline';

export default function Sessao4({ refSessao4, corFundo, corTexto }) {
    const [idiomaContext] = useContext(IdiomaContext);
    const [conteudo, setConteudo] = useState(ConteudoSessao4(idiomaContext));

    useEffect(() => {
        // console.log(idiomaContext);
        setConteudo(ConteudoSessao4(idiomaContext));
    }, [idiomaContext]);

    return (
        <section className={Styles.section} ref={refSessao4} style={{ backgroundColor: corFundo, color: corTexto }}>
            <svg className={Styles.svgEnfeite} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 10' preserveAspectRatio='none'>
                <polygon fill={corFundo} points='100 10 0 0 0 10' />
            </svg>

            <div className={Styles.section__inner}>
                <div className={Styles.block}>
                    <a className={Styles.pre}><span>#4</span>{conteudo[0]}</a>
                    <h2>{conteudo[1]}</h2>

                    <Timeline />
                </div>
            </div>
        </section>
    )
}
