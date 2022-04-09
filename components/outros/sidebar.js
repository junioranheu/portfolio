import Link from 'next/link';
import React from 'react';
import Styles from '../../styles/sidebar.module.css';

export default function Sidebar() {
    return (
        <nav className={Styles.side}>
            <div className={Styles.side__inner}>
                <div className={Styles.top}><Link href='/'><a>@junioranheu</a></Link></div>

                <div className={Styles.bottom}>
                    <a href='https://github.com/junioranheu' target='_blank' rel='noreferrer'>Github</a>
                    <a href='https://www.linkedin.com/in/junioranheu/'>Linkedin</a>
                    <a href='https://www.facebook.com/JuniorAnheu' target='_blank' rel='noreferrer'>Facebook</a>
                    <a href='mailto:junioranheu@gmail.com'>E-mail</a>
                </div>
            </div>
        </nav>
    )
}
