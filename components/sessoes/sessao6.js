import { useContext, useEffect, useState } from 'react';
import Anheu1 from '../../static/images/projetos/anheu1.webp';
import Anheu2 from '../../static/images/projetos/anheu2.webp';
import Anheu3 from '../../static/images/projetos/anheu3.webp';
import Anheu4 from '../../static/images/projetos/anheu4.webp';
import Anheu5 from '../../static/images/projetos/anheu5.webp';
import Styles from '../../styles/index.module.css';
import { IdiomaContext } from '../../utils/context/idiomaContext';
import ConteudoSessao6 from '../../utils/traducao/conteudoSessao6';
import Carousel from '../outros/carousel';

export default function Sessao6({ corFundo, corTexto }) {
    const [urlProjeto] = useState('https://anheu.vercel.app/');

    const [idiomaContext] = useContext(IdiomaContext);
    const [conteudo, setConteudo] = useState(ConteudoSessao6(idiomaContext));

    useEffect(() => {
        // console.log(idiomaContext);
        setConteudo(ConteudoSessao6(idiomaContext));
    }, [idiomaContext]);

    return (
        <section className={Styles.section} style={{ backgroundColor: corFundo, color: corTexto }}>
            <svg className={Styles.svgEnfeite} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 10' preserveAspectRatio='none'>
                <polygon fill={corFundo} points='100 0 100 10 0 10' />
            </svg>

            <div className={Styles.section__inner100}>
                <div className={Styles.block}>
                    <h2 className={Styles.link}>
                        <a href={urlProjeto} target='_blank' rel='noreferrer' className={Styles.link}>{conteudo[0]}</a>
                    </h2>

                    <p className={Styles.lead}>
                        {conteudo[1]}<br />
                        {conteudo[2]}<br />
                        {conteudo[3]}
                    </p>

                    <Carousel imgs={[Anheu1, Anheu2, Anheu3, Anheu4, Anheu5]} url={urlProjeto} />
                </div>
            </div>
        </section>
    )
}
