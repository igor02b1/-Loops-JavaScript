let n = 0
let numero = 0

do {
    numero = parseFloat(prompt('digite um número : (para parar o programa aperte 0)'));

    n = numero + n

} while (numero != 0);

document.write(`O resultado total é : ${n}`)