function conteudoSessao6(idioma) {
    let conteudo;

    if (idioma === '1' || idioma === 1) {
        conteudo = [
            'Projeto #2 — Framer',
            'Clonagem da ferramenta Framer.',
            'Desenvolvido para, também, praticar React.js e Next.js.',
            'Plataforma com múltiplas páginas, layouts diferentes e 100% responsivo.'
        ];
    } else {
        conteudo = [
            'Project #2 — Framer',
            'Cloning the prototyping tool: Framer.',
            'This project has also been developed to practice React.js and Next.js.',
            'It contains multiple pages, with different layouts, plus it\'s 100% responsive.'
        ];
    }

    return conteudo;
}

export default conteudoSessao6;