class JogoDaMemoria{
    // se mandar um obj = { tela: 1, idade: 2, etc: 3 }
    // vai ignorar o resto das propriedades e pegar somente a propriedade tela
    constructor({ tela, util }){
        this.tela = tela
        this.util = util
        this.heroisIniciais = [
            { img: './arquivos/batman.png', nome: 'batman' },
            { img: './arquivos/flash.png', nome: 'flash' },
            { img: './arquivos/thepunisher.png', nome: 'thepunisher' },
            { img: './arquivos/wonder_woman.png', nome: 'wonder_woman' },
        ]
        this.iconePadrao = "./arquivos/padrao.png"
        this.heroisEscondidos = []
        this.heroisSelecionados = []
    }
    // para usar o this, não precisamos do static!
    inicializar(){
        // vai pegar todas as funções da tela!
        // coloca todos os herois na tela
        this.tela.atualizarImagem(this.heroisIniciais)
        // força a tela a usar o THIS do Jogo da memoria
        this.tela.conigurarBotaoJogar(this.jogar.bind(this))
        this.tela.configurarBotaoVerificarSelecao(this.verificarSelecao.bind(this))
        this.tela.configurarBotaoMostrarTudo(this.mostrarHeroisEscondidos.bind(this))
    }
    async embaralhar(){
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
        this.tela.exibirCarregando()

        const idDoIntervalo = this.tela.iniciarContador()

        // vamos esperar 3 segundo para atualizar a tela
        await this.util.timeout(3000)
        this.tela.limparContador(idDoIntervalo)
        this.esconderHerois(copias)
        this.tela.exibirCarregando(false)
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
        this.heroisEscondidos = heroisOcultos
    }
    exibirHerois(nomeDoHeroi){
        const {img} = this.heroisIniciais.find(({nome}) => nomeDoHeroi === nome )
        // vamos criar a função na tela, para exibir somente o heroi selecionado
        this.tela.exibirHerois(nomeDoHeroi, img)
    }
    verificarSelecao(id, nome){
        const item = {id, nome}
        // vamos verificar a quantidade de herois selecionados
        // e tomar ação se escolheu certo ou errado
        const heroisSelecionados = this.heroisSelecionados.length
        switch(heroisSelecionados){
            case 0:
                // adiciona a escolha na lista, esperando pela proxima clicada
                this.heroisSelecionados.push(item)
                break;
            case 1:
                // se a quantidade de escolhidos for 1, significa
                // que o usuario só pode escolher mais um
                // vamos obter o primeiro item da lista
                const [ opcao1 ] = this.heroisSelecionados
                // zera itens para nao selecionar mais de dois
                this.heroisSelecionados = []
                // conferimos se os nomes e ids batem conforme o esperado
                if(opcao1.nome === item.nome && opcao1.id !== item.id){
                    // aqui verificamos se são ids diferentes para
                    // o usuario nao clicar duas vezes no mesmo
                    this.exibirHerois(item.nome)
                    // como o padrão e true, nao precisa passar nada
                    this.tela.exibirMensagem()
                    // para a execução
                    return;
                }
                this.tela.exibirMensagem(false)
                // fim do case!
                break
        }
    }
    mostrarHeroisEscondidos(){
        // vamos pegar todos os herois da tela e colocar seu
        // respectivo valor correto
        const heroisEscondidos = this.heroisEscondidos
        for(const heroi of heroisEscondidos){
            const { img } = this.heroisIniciais.find(item => item.nome === heroi.nome)
            heroi.img = img
        }
        this.tela.atualizarImagem(heroisEscondidos)
    }

    jogar(){
        this.embaralhar()
    }

}