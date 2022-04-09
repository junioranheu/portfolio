import React from 'react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slide from '../../components/outros/slide';
import Spotify1 from '../../static/images/projetos/spotify1.webp';
import Spotify2 from '../../static/images/projetos/spotify2.webp';
import Spotify3 from '../../static/images/projetos/spotify3.webp';
import Styles from '../../styles/index.module.css';

export default function Sessao5({ refSessao5, corFundo, corTexto }) {
    return (
        <section className={Styles.section} ref={refSessao5} style={{ backgroundColor: corFundo, color: corTexto }}>
            <svg className={Styles.svgEnfeite} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'>
                <path fill={corFundo} d='M0 100 C 20 0 50 0 100 100 Z'></path>
            </svg>

            <div className={Styles.section__inner100}>
                <div className={Styles.block}>
                    <a className={Styles.pre}><span>#4</span>Projetos pessoais</a>
                    <h2 className={Styles.link}>
                        <a href='https://spotify-anheu.vercel.app/' target='_blank' rel='noreferrer' className={Styles.link}>Projeto #1 — Spotify</a>
                    </h2>

                    <p className={Styles.lead}>
                        Um clone do Spotify.<br />
                        Desenvolvido para praticar React.js, Next.js, .NET, API Rest, JWT token, e etc.<br />
                    </p>

                    <Swiper className={Styles.carousel}
                        spaceBetween={0} slidesPerView={1} loop={true}

                        breakpoints={{
                            1: {
                                slidesPerView: 1,
                            },
                            600: {
                                slidesPerView: 1,
                            },
                            801: {
                                slidesPerView: 1,
                            },
                        }}

                        modules={[Navigation]}
                        navigation
                    >
                        <SwiperSlide>
                            <Slide img={Spotify1} url='https://spotify-anheu.vercel.app/' />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Slide img={Spotify2} url='https://spotify-anheu.vercel.app/' />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Slide img={Spotify3} url='https://spotify-anheu.vercel.app/' />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section >
    )
}
