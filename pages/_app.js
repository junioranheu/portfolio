import React, { useEffect, useState } from 'react';
import AnimatedCursor from 'react-animated-cursor';
import Footer from '../components/outros/footer';
import Sidebar from '../components/outros/sidebar';
import '../fonts/GTWalsheim.css';
import '../fonts/NanumPenScript.css';
import '../styles/globals.css';
import { IdiomaProvider } from '../utils/context/idiomaContext';

export default function App({ Component, pageProps }) {
    const [showChild, setShowChild] = useState(false);

    useEffect(() => {
        setShowChild(true);
    }, []);

    if (!showChild) {
        return null;
    }

    return (
        <IdiomaProvider>
            <AnimatedCursor
                innerSize={8}
                outerSize={8}
                color='222, 55, 55'
                outerAlpha={0.2}
                innerScale={0.7}
                outerScale={5}
            />

            <section className='main semHighlight'>
                <Sidebar />
                <Component {...pageProps} />
                <Footer />
            </section>
        </IdiomaProvider>
    )
}


