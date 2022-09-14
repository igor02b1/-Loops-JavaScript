let par = 0
let impar = 0
for (let i = 0; i <= 10; i++) {
    num = parseInt(prompt('Digite um número: '));
    if(num % 2 == 0){
         par++
    } else if(num % 2 != 0){
        impar++
    }
}
document.write(`\nOs números pares são ${num}`);
document.write(`\nOs números impares são ${num}`);