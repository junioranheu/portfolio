function conteudoSessao3(idioma) {
    let conteudo;

    if (idioma === '1' || idioma === 1) {
        conteudo = [
            'Skills',
            'Conhecimentos e habilidades.',
            'Com ' + (new Date().getFullYear() - 2017) + ' anos de carreira, acredito veemente — e, ainda, humildemente 😎 — que estes sejam os meus níveis atuais nas linguagens, frameworks, etc., abaixo.',
        ];
    } else {
        conteudo = [
            'Skills',
            'Knowledge and skills.',
            'With a ' + (new Date().getFullYear() - 2017) + '-year career, I believe these are my current levels in the following items. 🙂',
        ];
    }

    return conteudo;
}

export default conteudoSessao3;