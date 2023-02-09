const readlineSync = require('readline-sync')

const valores = []
let input = ""

while (input != "sair") {
    valores.push(input)
    input = readlineSync.question("Digite uma propriedade CSS").toLocaleLowerCase()

}
console.log(valores.sort().join("\n"))