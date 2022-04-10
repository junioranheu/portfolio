import React, { useContext, useEffect, useState } from 'react';
import Styles from '../../styles/index.module.css';
import { IdiomaContext } from '../../utils/context/idiomaContext';
import ConteudoSessao3 from '../../utils/traducao/conteudoSessao3';
import Skills from '../skills/skills';

export default function Sessao3({ refSessao3, corFundo, corTexto }) {
    const [idiomaContext] = useContext(IdiomaContext);
    const [conteudo, setConteudo] = useState(ConteudoSessao3(idiomaContext));

    useEffect(() => {
        // console.log(idiomaContext);
        setConteudo(ConteudoSessao3(idiomaContext));
    }, [idiomaContext]);

    return ( 
        <section className={Styles.section} ref={refSessao3} style={{ backgroundColor: corFundo, color: corTexto }}>
            <svg className={Styles.svgEnfeite} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 10' preserveAspectRatio='none'>
                <polygon fill={corFundo} points='100 0 100 10 0 10' />
            </svg>

            <div className={Styles.section__inner}>
                <div className={Styles.block}>
                    <a className={Styles.pre}><span>#3</span>{conteudo[0]}</a>

                    <h2>{conteudo[1]}</h2>

                    <p className={Styles.lead}>
                    <div dangerouslySetInnerHTML={{ __html: conteudo[2] }} />
                    </p>

                    <Skills />
                </div>
            </div>
        </section>
    )
}
