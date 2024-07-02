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
        // força a tela a usar o THIS do Jogo da memoria
        this.tela.conigurarBotaoJogar(this.jogar.bind(this))
    }
    embaralhar(){
        const copias = this.heroisIniciais
        // duplica os itens
        .concat(this.heroisIniciais)
        // entrar em cada item e cria um id aleatorio
        .map(item => {
            return Object.assign({}, item, { id: Math.random() / 0.5 })
        })
        // ordenar aleatoriamente
        .sort(() => Math.random() - 0.5)
        this.tela.atualizarImagem(copias)
    }
    jogar(){
        this.embaralhar()
    }

}