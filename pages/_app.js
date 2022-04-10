import React, { useEffect, useState } from 'react';
import '../fonts/GTWalsheim.css';
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
            <section className='main semHighlight'>
                <Component {...pageProps} />
            </section>
        </IdiomaProvider>
    )
}


