function conteudoTimeline(idioma) {
    let conteudo;

    if (idioma === '1' || idioma === 1 || idioma === null) {
        conteudo = [
            'Maio de 2017 — Fevereiro de 2018',
            'Estagiário de desenvolvimento de software — Apolo Tubulars',
            'Fevereiro de 2018 — Maio de 2021',
            'Assistente de desenvolvimento de software — Apolo Tubulars',
            'Maio de 2021 — Presente',
            'Analista de desenvolvimento fullstack pleno, .NET — Instituto de Pesquisa e Planejamento de São José dos Campos'
        ];
    } else if (idioma === '2' || idioma === 2) {
        conteudo = [
            'May 2017 — February 2018',
            'IT intern – Software development — Apolo Tubulars',
            'February 2018 — May 2021',
            'IT assistent – Software development — Apolo Tubulars',
            'May 2021 — Present',
            '.NET fullstack dev — IPPLAN — Research and Planning Institute'
        ];
    } else if (idioma === '3' || idioma === 3) {
        conteudo = [
            'Mayo del 2017 — Febrero del 2018',
            'Desarrollador pasante — Apolo Tubulars',
            'Febrero del 2018 — Mayo 2021',
            'Asistente desarrollador — Apolo Tubulars',
            'Mayo del 2021 — Hoy',
            'Desarrollador fullstack .NET — IPPLAN - Instituto de Investigación y Planificación de São José dos Campos'
        ];
    }

    return conteudo;
}

export default conteudoTimeline;