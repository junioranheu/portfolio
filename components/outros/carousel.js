import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import Styles from '../../styles/index.module.css';
import Slide from './slide';

export default function Carousel({ imgs, url }) {
    return (
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

            {[...Array(imgs.length)].map((x, i) =>
                <SwiperSlide key={i}>
                    <Slide img={imgs[i]} url={url} />
                </SwiperSlide>
            )}
        </Swiper>
    )
}