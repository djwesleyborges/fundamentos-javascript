const fs = require('fs')
fs.readFile('./arq1.txt', (error, resposta) =>{
    if(error){
        console.error('Deu ruim', error.stack)
        return
    }

    // console.log('resposta:', resposta) // buffer
    console.log('resposta:', resposta.toString())
})

// isso e a função de callback (errorArq1, respostaArq1)
fs.readFile('./arq1.txt', (errorArq1, respostaArq1) => {
    if(errorArq1){
        console.error('Erro', errorArq1)
        return
    }
    fs.readFile('./arq2.txt', (errorArq2, respostaArq2) => {
        if(errorArq2){
            console.error('Erro', errorArq2)
            return
        }
        fs.readFile('./arq3.txt', (errorArq3, respostaArq3) => {
            if(errorArq3){
                console.error('Erro', errorArq3)
                return
            }

            const conteudo = `${respostaArq1}\n${respostaArq2}\n${respostaArq3}`
            // escrevendo novo arquivo
            fs.writeFile('./final.txt', conteudo, (errorWrite, respostaWrite) => {
                if(errorWrite){
                    console.error('Erro ao gravar', errorWrite)
                    return
                }
                console.log('Arquivo salvo!')
            })

        })
    })
})