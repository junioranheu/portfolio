function conteudoSessao7(idioma) {
    let conteudo;

    if (idioma === '1' || idioma === 1 || idioma === null) {
        conteudo = [
            'Projeto #3 — Detector de expressões',
            'Aplicação feita com React.js e Next.js, utilizando a API face-api.js para detecção e reconhecimento facial.',
            'Nenhum dado ou imagem é gravado. Tudo é processado apenas no client-side. Não se preocupe. 🙃'
        ];
    } else if (idioma === '2' || idioma === 2) {
        conteudo = [
            'Project #3 — Expression detector',
            'App made using React.js, Next.js and face-api.js for facial detection and recognition.',
            'No data or images are recorded. Everything is processed on the client-side. Don\'t you worry.🙃'
        ];
    }else if (idioma === '3' || idioma === 3) {
        conteudo = [
            'Proyect #3 — Detector de expresión',
            'App hecha usando React.js, Next.js y face-api.js para detección y reconocimiento facial.',
            'No se graban datos ni imágenes. Todo se procesa en client-side. No se preocupe. 🙃'
        ];
    }

    return conteudo;
}

export default conteudoSessao7;