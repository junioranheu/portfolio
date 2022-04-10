import React, { useContext, useEffect, useState } from 'react';
import Spotify1 from '../../static/images/projetos/spotify1.webp';
import Spotify2 from '../../static/images/projetos/spotify2.webp';
import Spotify3 from '../../static/images/projetos/spotify3.webp';
import Styles from '../../styles/index.module.css';
import { IdiomaContext } from '../../utils/context/idiomaContext';
import ConteudoSessao5 from '../../utils/traducao/conteudoSessao5';
import Carousel from '../outros/carousel';

export default function Sessao5({ refSessao5, corFundo, corTexto }) {
    const [urlProjeto] = useState('https://spotify-anheu.vercel.app/');

    const [idiomaContext] = useContext(IdiomaContext);
    const [conteudo, setConteudo] = useState(ConteudoSessao5(idiomaContext));

    useEffect(() => {
        // console.log(idiomaContext);
        setConteudo(ConteudoSessao5(idiomaContext));
    }, [idiomaContext]);

    return (
        <section className={Styles.section} ref={refSessao5} style={{ backgroundColor: corFundo, color: corTexto }}>
            <svg className={Styles.svgEnfeite} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'>
                <path fill={corFundo} d='M0 100 C 20 0 50 0 100 100 Z'></path>
            </svg>

            <div className={Styles.section__inner100}>
                <div className={Styles.block}>
                    <a className={Styles.pre}><span>#5</span>{conteudo[0]}</a>
                    <h2 className={Styles.link}>
                        <a href={urlProjeto} target='_blank' rel='noreferrer' className={Styles.link}>{conteudo[1]}</a>
                    </h2>

                    <p className={Styles.lead}>
                        {conteudo[2]}<br />
                        {conteudo[3]}<br />
                        {conteudo[4]}
                    </p>

                    <Carousel imgs={[Spotify1, Spotify2, Spotify3]} url={urlProjeto} />
                </div>
            </div>
        </section >
    )
}
