import React, { useContext, useEffect, useState } from 'react';
import Deteccao1 from '../../static/images/projetos/deteccao1.webp';
import Deteccao2 from '../../static/images/projetos/deteccao2.webp';
import Styles from '../../styles/index.module.css';
import { IdiomaContext } from '../../utils/context/idiomaContext';
import ConteudoSessao7 from '../../utils/traducao/conteudoSessao7';
import Carousel from '../outros/carousel';

export default function Sessao7({ corFundo, corTexto }) {
    const [urlProjeto] = useState('https://reconhecimento-facial-junioranheu.vercel.app/');

    const [idiomaContext] = useContext(IdiomaContext);
    const [conteudo, setConteudo] = useState(ConteudoSessao7(idiomaContext));

    useEffect(() => {
        // console.log(idiomaContext);
        setConteudo(ConteudoSessao7(idiomaContext));
    }, [idiomaContext]);

    return (
        <section className={Styles.section} style={{ backgroundColor: corFundo, color: corTexto }}>
            <svg className={Styles.svgEnfeite} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 10' preserveAspectRatio='none'>
                <polygon fill={corFundo} points='100 10 0 0 0 10' />
            </svg>

            <div className={Styles.section__inner100}>
                <div className={Styles.block}>
                    <h2 className={Styles.link}>
                        <a href={urlProjeto} target='_blank' rel='noreferrer' className={Styles.link}>{conteudo[0]}</a>
                    </h2>

                    <p className={Styles.lead}>
                        {conteudo[1]}<br />
                        {conteudo[2]}
                    </p>

                    <Carousel imgs={[Deteccao1, Deteccao2]} url={urlProjeto} />
                </div>
            </div>
        </section>
    )
}
