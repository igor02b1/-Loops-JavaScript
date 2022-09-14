let idade = 0
let idade1 = 0
let idade2 = 0
while(idade != -99){
    idade = parseInt(prompt('digite sua idade: (para encerrrar o programa digite -99'));
    if(idade1 >= 0 && idade1 <= 21){
        idade1 ++
    }
    else if(idade2 > 50){
        idade2 ++
    }
}
document.write(`Existem ${idade1} pessoas com menos de 21 anos\n`);
document.write(`Existem ${idade2} pessoas com mais de 50 anos\n`);
