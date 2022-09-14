let n = 0
let numero = 0
let media = 0

do {
    numero = parseFloat(prompt('Digite numeros: (Digite 0 caso queira finalizar o programa):'));

    if(numero % 3 == 0){
        media = media + numero
        n++
    }
    

} while (numero != 0);

const total = media / n

document.write(`O total : ${media}`)