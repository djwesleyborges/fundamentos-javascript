class JogoDaMemoria{
    // se mandar um obj = { tela: 1, idade: 2, etc: 3 }
    // vai ignorar o resto das propriedades e pegar somente a propriedade tela
    constructor({ tela }){
        this.tela = tela
        this.heroisIniciais = [
            { img: './arquivos/batman.png', nome: 'batman' },
            { img: './arquivos/flash.png', nome: 'flash' },
            { img: './arquivos/thepunisher.png', nome: 'thepunisher' },
            { img: './arquivos/wonder_woman.png', nome: 'wonder_woman' },
        ]
    }
    // para usar o this, não precisamos do static!
    inicializar(){
        // vai pegar todas as funções da tela!
        // coloca todos os herois na tela
        this.tela.atualizarImagem(this.heroisIniciais)

    }
}