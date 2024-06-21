function minhaFuncao1(parametro1){
    return `aeeee`
}

const minhaFuncao2 = function(parametro1){
    return `aeee ${parametro1}`
}

const minhaFuncao3 = (parametro1) => {
    return `aeee ${parametro1}`
}

// função com apenas 1 parametro -> parametro1
const minhaFuncao4 = parametro1 => `aeee ${parametro1}`

const obj1 = {
    minhaFuncao: parametro1 => `aee ${parametro1}`
}

obj1.minhaFuncao('teste')

const obj2 = {
    minhaFuncao(parametro){
        return `aeee ${parametro}`
    }
}

obj2.minhaFuncao('ola')