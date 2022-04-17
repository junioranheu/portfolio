import React, { useContext, useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import Styles from '../../styles/index.module.css';
import { IdiomaContext } from '../../utils/context/idiomaContext';
import ConteudoSessao2 from '../../utils/traducao/conteudoSessao2';

export default function Sessao2({ refSessao2, corFundo, corTexto }) {
    const [idiomaContext] = useContext(IdiomaContext);
    const [conteudo, setConteudo] = useState(ConteudoSessao2(idiomaContext));

    useEffect(() => {
        // console.log(idiomaContext);
        setConteudo(ConteudoSessao2(idiomaContext));
    }, [idiomaContext]);

    return (
        <section className={Styles.section} ref={refSessao2} style={{ backgroundImage: corFundo, color: corTexto }}>
            <div className={Styles.section__inner}>
                <div className={Styles.block}>
                    <a className={Styles.pre}><span>#2</span>{conteudo[0]}</a>

                    <Fade triggerOnce>
                        <h1>
                            {conteudo[1]}<br />
                            {conteudo[2]}<br />
                            {conteudo[3]}<br />
                            {conteudo[4]}<br />
                            {conteudo[5]}
                        </h1>
                    </Fade>

                    <Fade triggerOnce cascade>
                        <p className={Styles.lead}>
                            {conteudo[6]}
                        </p>

                        <p className={Styles.lead}>
                            {conteudo[7]}
                        </p>

                        <p className={Styles.lead}>
                            <div dangerouslySetInnerHTML={{ __html: conteudo[8] }} />
                        </p>
                    </Fade>
                </div>
            </div>
        </section>
    )
}
