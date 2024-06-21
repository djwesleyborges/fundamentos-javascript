// meses começam do zero!
const dataAniversario = new Date(2020, 0, 20)
console.log(dataAniversario)

const primeiraDataDoJS = new Date(0)
console.log(primeiraDataDoJS)

const hoje = new Date()
console.log(hoje)
console.log(hoje.toLocaleDateString())
// formato global recomendado
console.log(hoje.toISOString())

const dia = hoje.getDate()
hoje.setDate(dia + 5)
hoje.setHours(10,30,0)
console.log(hoje)

console.log(`
    Dia: ${hoje.getDate()}
    Mes: ${hoje.getMonth()}
    Ano: ${hoje.getFullYear()}
    Hora: ${hoje.getHours()}
    Minuto: ${hoje.getMinutes}
    Segundo: ${hoje.getSeconds}
`)

console.log(
    new Date(2020,1,20) > new Date(2000, 1, 1)
)