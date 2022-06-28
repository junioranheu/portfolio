function conteudoSessao6(idioma) {
    let conteudo;

    if (idioma === '1' || idioma === 1 || idioma === null) {
        conteudo = [
            'Projeto #2 — Anheu',
            'Projeto para simular uma plataforma de ensino on-line de tecnologia e programação.',
            'Desenvolvido para, também, praticar React.js e Next.js, além de C#, API REST, JWT, XUnit e SignalR.',
            'Plataforma com múltiplas páginas, layouts diferentes e 100% responsivos.'
        ];
    } else if (idioma === '2' || idioma === 2) {
        conteudo = [
            'Project #2 — Anheu',
            'It simulates an online platform for teaching technology and programming.',
            'This project has also been developed to practice React.js and Next.js, in addition to C#, API REST, JWT token, XUnit, and SignalR.',
            'It contains multiple pages, with different layouts, plus it\'s 100% responsive.'
        ];
    }else if (idioma === '3' || idioma === 3) {
        conteudo = [
            'Proyecto #2 — Anheu',
            'Proyecto de simulación de una plataforma de enseñanza de tecnología y programación online.',
            'Desarrollado para también practicar React.js y Next.js, además de C#, API REST, JWT token, XUnit y SignalR.',
            'Plataforma con multiples páginas, layouts distinctos y 100% responsivos.'
        ];
    }

    return conteudo;
}

export default conteudoSessao6;