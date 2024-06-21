class Piloto {
    constructor(nome, dataNascimento, tempoDeVoo, temPermissaoParaVoar)

    {
        this.nome = nome
        this.dataNascimento = dataNascimento
        this.tempoDeVoo = tempoDeVoo
        this.temPermissaoParaVoar = temPermissaoParaVoar
    }

    pilotar(){
        console.log(`${this.nome} vai pilotar!`)
    }

    dormir(){
        console.log(`${this.nome} vai dormir!`)
    }


}


const piloto = new Piloto("geraldino", new Date(1990, 2, 3), '10 anos')

console.log(piloto.nome)
console.log(piloto.dataNascimento)
piloto.pilotar()
piloto.dormir()