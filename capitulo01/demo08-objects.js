const heroi = {
    nome: 'Flash',
    idade: 100,
    sexo: 'Masculino'
}

console.log('nome', heroi.nome)
console.log('idade', heroi['idade'])
console.log('sexo', heroi.sexo)
console.log('nao existe', heroi.naoExiste)

heroi.id = 0o1
console.log(heroi)

// Pegar somente as chaves do objeto
console.log(Object.keys(heroi))

// Pegar somente os valores
console.log(Object.values(heroi))

// Juntar dois objetos
const pessoa = {
    tamanho: '10 metros'
}

const novoObj = Object.assign(heroi, pessoa)
console.log(novoObj)

// removendo chave do objeto
delete novoObj.nome
console.log(novoObj)
