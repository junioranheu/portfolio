function conteudoTimeline(idioma) {
    let conteudo;

    if (idioma === '1' || idioma === 1 || idioma === null) {
        conteudo = [
            'Maio de 2017 — Fevereiro de 2018',
            'Estagiário de desenvolvimento de software — Apolo Tubulars',
            'Fevereiro de 2018 — Maio de 2021',
            'Assistente de desenvolvimento de software — Apolo Tubulars',
            'Maio de 2021 — Presente',
            'Analista de desenvolvimento fullstack pleno, .NET — Intituto de Pesquisa e Planejamento de São José dos Campos'
        ];
    } else {
        conteudo = [
            'May 2017 — February 2018',
            'IT intern – Software development — Apolo Tubulars',
            'February 2018 — May 2021',
            'IT assistent – Software development — Apolo Tubulars',
            'May 2021 — Present',
            '.NET fullstack dev — IPPLAN — Research and Planning Institute'
        ];
    }

    return conteudo;
}

export default conteudoTimeline;