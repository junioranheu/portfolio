import React from 'react';
import Styles from '../../styles/index.module.css';

export default function Secao2({ refSessao2, corFundo, corTexto }) {
    return (
        <section className={Styles.section} ref={refSessao2} style={{ backgroundColor: corFundo, color: corTexto }}>
            <div className={Styles.section__inner}>
                <div className={Styles.block}>
                    <a className={Styles.pre}><span>#2</span>Sobre</a>

                    <h1>
                        Me chamo Junior.<br />
                        {(new Date().getFullYear() - 1997)} anos.<br />
                        Dev .NET fullstack.<br />
                        Lorena, São Paulo<br />
                        Brasil.
                    </h1>

                    <p className={Styles.lead}>
                        Iniciei minha carreira como dev em 2017.
                        Atualmente trabalho no IPPLAN — Instituto de Pesquisa e Planejamento de São José dos Campos.
                    </p>

                    <p className={Styles.lead}>
                        Adoro programar e, também, dispertar o gosto para a programação em outras pessoas.
                    </p>

                    <p className={Styles.lead}>
                        Veja todos meus projetos no meu <a href='https://github.com/junioranheu' target='_blank' rel='noreferrer' className={Styles.link}>Github</a>,
                        e o meu perfil no <a href='https://www.linkedin.com/in/junioranheu/' target='_blank' rel='noreferrer' className={Styles.link}>Linkedin</a>.
                    </p>
                </div>
            </div>
        </section>
    )
}
