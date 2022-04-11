function conteudoSessao3(idioma) {
    let conteudo;

    if (idioma === '1' || idioma === 1 || idioma === null) {
        conteudo = [
            'Skills',
            'Conhecimentos e habilidades.',
            'Com ' + (new Date().getFullYear() - 2017) + ' anos de carreira, acredito veemente — e, ainda, humildemente 😎 — que estes sejam os meus níveis atuais nas linguagens, frameworks, tecnologias, etc., abaixo.',
        ];
    } else if (idioma === '2' || idioma === 2) {
        conteudo = [
            'Skills',
            'Knowledge and skills.',
            'With a ' + (new Date().getFullYear() - 2017) + '-year career, I believe these are my current levels in the following items. 🙂',
        ];
    }else if (idioma === '3' || idioma === 3) {
        conteudo = [
            'Skills',
            'Conocimientos y habilidades.',
            'Teniendo ' + (new Date().getFullYear() - 2017) + ' años de carrera, creo que estos son mis niveles actuales en las tecnologias de abajo. 🙂',
        ];
    }

    return conteudo;
}

export default conteudoSessao3;