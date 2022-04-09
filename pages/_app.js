import '../fonts/GTWalsheim.css';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
    return (
        <section className='main semHighlight'>
            <Component {...pageProps} />
        </section>
    )
}


