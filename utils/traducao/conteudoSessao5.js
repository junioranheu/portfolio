function conteudoSessao5(idioma) {
    let conteudo;

    if (idioma === '1' || idioma === 1) {
        conteudo = [
            'Projetos pessoais',
            'Projeto #1 — Spotify',
            'Um clone fiel do Spotify. 🎶',
            'Desenvolvido para praticar React.js, Next.js, .NET no back-end, API Rest, JWT token, e etc.',
            'O mais legal é que o player realmente funciona!'
        ];
    } else {
        conteudo = [
            'Personal projects',
            'Project #1 — Spotify',
            'A identical Spotify clone. 🎶',
            'This project has been developed to practice React.js, Next.js, .NET, Rest API, JWT token, etc.',
            'What\'s so great about that is you can really listen to real music!'
        ];
    }

    return conteudo;
}

export default conteudoSessao5;