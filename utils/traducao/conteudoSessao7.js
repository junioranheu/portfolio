function conteudoSessao7(idioma) {
    let conteudo;

    if (idioma === '1' || idioma === 1 || idioma === null) {
        conteudo = [
            'Entre em contato comigo',
            'Para me contatar, envie um e-mail para:',
            'Outros links para contato:',
            ' e',
            'Veja todos meus projetos pessoais em meu',
            'Obrigado por chegar até aqui.',
            'Tenha'
        ];
    } else {
        conteudo = [
            'Get in touch',
            'Mail me at:',
            'Other links:',
            ', and',
            'Check out all my personal projects: ',
            'Cheers.',
            'Have'
        ];
    }

    return conteudo;
}

export default conteudoSessao7;