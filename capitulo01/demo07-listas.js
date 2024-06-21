const minhaLista = []
const minhaListaDeTarefas = [
    'mandar email',
    'colocar comida para o dog',
    'limpar o quarto',
    'lavar louça'
]

console.log(minhaListaDeTarefas[0])
console.log(minhaListaDeTarefas[1])
console.log(minhaListaDeTarefas[4])

// quantidades de item no array
console.log(minhaListaDeTarefas.length)

// adicionar item
minhaListaDeTarefas.push('formatar computador')
console.log(minhaListaDeTarefas)

// remover ultimo da lista
const ultimo = minhaListaDeTarefas.pop()
console.log(ultimo, minhaListaDeTarefas)

// remover o primeiro item da lista
const primeiro = minhaListaDeTarefas.shift()
console.log(primeiro, minhaListaDeTarefas)

// remover um item especifico a partir de um indice
// splice(qual_item_de_inicio, quantos_remover)
console.log('antes: ',minhaListaDeTarefas)
minhaListaDeTarefas.splice(2, 1)
console.log('depois: ', minhaListaDeTarefas)

//

const itens = [
    1, 'computador', 0.22
]

// verificar o tipo do array
console.log(
    typeof(itens)
)

// verifica se é array da forma correta
console.log(Array.isArray(itens))

// ordenar
const numeros = [3,2,1,0]
console.log(numeros.sort())

const letras = ['c', 'z', 'a', 'd']
console.log(letras.sort())

// juntar dois arrays
const novo = itens.concat(letras)
console.log(novo)

// juntar dois arrays em uma string
console.log(itens.join('-'))

// procurando o indece de um elemento no array 
const index = itens.indexOf('computador')
console.log(index)
