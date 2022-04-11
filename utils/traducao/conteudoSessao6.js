function conteudoSessao6(idioma) {
    let conteudo;

    if (idioma === '1' || idioma === 1 || idioma === null) {
        conteudo = [
            'Projeto #2 — Framer',
            'Clonagem da ferramenta Framer.',
            'Desenvolvido para, também, praticar React.js e Next.js.',
            'Plataforma com múltiplas páginas, layouts diferentes e 100% responsivos.'
        ];
    } else if (idioma === '2' || idioma === 2) {
        conteudo = [
            'Project #2 — Framer',
            'Cloning the prototyping tool: Framer.',
            'This project has also been developed to practice React.js and Next.js.',
            'It contains multiple pages, with different layouts, plus it\'s 100% responsive.'
        ];
    }else if (idioma === '3' || idioma === 3) {
        conteudo = [
            'Proyecto #2 — Framer',
            'Clon de la herramienta Framer.',
            'Desarrollado para también practicar React.js y Next.js.',
            'Plataforma con multiples páginas, layouts distinctos y 100% responsivos.'
        ];
    }

    return conteudo;
}

export default conteudoSessao6;