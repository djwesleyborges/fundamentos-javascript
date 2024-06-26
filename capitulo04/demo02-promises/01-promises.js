const readline = require('readline')
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// terminal.question('Qual e seu nome?\n', nome =>{
//     terminal.question('Qual e seu telefone?\n', telefone =>{
//         console.log(
//             `
//             Nome: ${nome},
//             Telefone: ${telefone}
//             `
//         )
//         terminal.close()
//     })
// })


function questionAsync(texto){
    return new Promise((resolve, reject) => {
        terminal.question(`${texto}\n`, resolve)
    })
}

let nome = ""
let telefone = ""
Promise.resolve()
    .then(() => questionAsync('Qual é seu nome?'))
    .then(respostaNome => {
        if(!respostaNome) throw new Error('campo vazio!')
        nome = respostaNome
    })
    .then(() => questionAsync('Qual e o seu telefone?'))
    .then(respotaTelefone => {
        if(!respotaTelefone) throw new Error('campo vazio!')
        telefone = respotaTelefone
    })
    .then(() => {
        console.log(`Nome: ${nome}, Telefone: ${telefone}`)
    })
    .catch(error => {
        console.error('Deu ruim', error.stack)
    })
    .finally(() => terminal.close())
