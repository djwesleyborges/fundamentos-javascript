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
        this.iconePadrao = "./arquivos/padrao.png"
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

        // vamos esperar 1 segundo para atualizar a tela
        setTimeout(() => {
            this.esconderHerois(copias)
        }, 1000)

    }
    esconderHerois(herois){
        // vamos trocar a imagem de todos os herois existens
        // pelo icone padrão
        // como fizemos no construtor, vamos extrair somente ao necessario
        // usando a sintaxe ({ chave: 1 }) estamos falando que vamos retornar
        // o que tiver dentro dos parenteses
        // quando não usamos: (exemplo do id), o JS entende que o nome
        // é o mesmo valor. Ex. id: id, vira id.
        const heroisOcultos = herois.map(({ nome, id }) => ({
            id,
            nome,
            img: this.iconePadrao
        }))
        // atualizamos a tela com os herois ocultos
        this.tela.atualizarImagem(heroisOcultos)
        // guardamos os herois para trabalhar com eles depois
        this.heroisOcultos = heroisOcultos
    }
    jogar(){
        this.embaralhar()
    }

}