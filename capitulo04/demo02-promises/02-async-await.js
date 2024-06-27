const readline = require('readline')
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function questionAsync(texto){
    return new Promise((resolve, reject) => {
        terminal.question(`${texto}\n`, msg =>{
            // se msg for true executa o resolve, se nao reject
            !!msg ? resolve(msg) : reject(new Error("O campo nao pode ser vazio"))
        })
    })
}


// melhor usar async await do que callbacks e promises

async function main(){
    try{
        const nome = await questionAsync('Qual é o seu nome?')
        const telefone = await questionAsync('Qual e o telefone?')
        console.log(`Nome: ${nome}, Telefone ${telefone}`)
    }
    catch (error){
        console.log('Deu ruim', error.stack)
    }
    finally {
        terminal.close()
    }
}

main()