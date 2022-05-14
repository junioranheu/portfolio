import React, { useContext, useEffect, useState } from 'react';
import VideoSpotifyAppMp4 from '../../static/videos/projetos/spotifyapp.mp4';
import VideoSpotifyAppWebm from '../../static/videos/projetos/spotifyapp.webm';
import Styles from '../../styles/index.module.css';
import { IdiomaContext } from '../../utils/context/idiomaContext';
import ConteudoSessao8 from '../../utils/traducao/conteudoSessao8';

export default function Sessao8({ corFundo, corTexto }) {
    const [urlProjeto] = useState('https://framer-anheu.vercel.app/');

    const [idiomaContext] = useContext(IdiomaContext);
    const [conteudo, setConteudo] = useState(ConteudoSessao8(idiomaContext));

    useEffect(() => {
        // console.log(idiomaContext);
        setConteudo(ConteudoSessao8(idiomaContext));
    }, [idiomaContext]);

    return (
        <section className={Styles.section} style={{ backgroundColor: corFundo, color: corTexto }}>
            <svg className={Styles.svgEnfeite} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 10' preserveAspectRatio='none'>
                <polygon fill={corFundo} points='100 0 100 10 0 10' />
            </svg>

            <div className={Styles.section__inner100}>
                <div className={Styles.block}>
                    <h2 className={Styles.link}>
                        <a href={urlProjeto} target='_blank' rel='noreferrer' className={Styles.link}>{conteudo[1]}</a>
                    </h2>

                    <div className={Styles.divVideoWrapper}>
                        {/* <video className={Styles.video} autoPlay loop muted playsInline disablePictureInPicture controls={false}> */}
                        <video className={Styles.video} loop playsInline disablePictureInPicture controls controlsList='nofullscreen  nodownload'>
                            <source src={VideoSpotifyAppWebm} type='video/mp4' />
                            <source src={VideoSpotifyAppMp4} type='video/mp4' />
                        </video>

                        <p className={Styles.lead}>
                            {conteudo[2]}<br />
                            {conteudo[3]}<br />
                            {conteudo[4]}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
