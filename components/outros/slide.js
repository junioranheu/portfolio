import Image from 'next/image';
import Styles from '../../styles/index.module.css';

export default function Slide({ img, url }) {
    return (
        <div className={Styles.divImgCarousel}>
            <Image src={img} alt='' objectFit='contain' className={Styles.imgCarousel} onClick={() => { window.open(url, '_blank') }} title='' />
        </div>
    )
}