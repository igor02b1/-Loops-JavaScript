let i = 0;
let qtdCalmas = 0;
let qtdMNervosas = 0;
let qtdHAgressivos = 0;
let qtdOCalmos = 0;
let qtdNervosos40 = 0;
let qtdCalmos18 = 0;


while (i < 150) {
  const idadeText = prompt('Digite a idade: ');
  const idade = Number(idadeText);
    sexo = parseInt(prompt('Escolha o sexo entre: \n\n'));
    document.write('1 - Homem: \n\n');
    document.write('2 - mulher: \n\n');
    document.write('3 - outros: \n\n');
    humor = parseInt(prompt('Escolha o humor entre: \n'));
    document.write('1 - Calmo(a): \n');
    document.write('2 - Nervoso(a): \n');
    document.write('3 - Agressivo(a): \n');
        if(humor == 1){
            qtdCalmas++
        }
        else if(sexo == 2 && humor == 2){
            qtdMnervosas++
        }
        else if(sexo == 1 && humor == 3){
            qtdHAgressivos++
        }
        else if(sexo == 3 && humor == 1){
            qtdOCalmos++
        }
        if(idade > 40 && humor == 2){
            qtdNervoso40++
        }
        else if(age < 18 && emotion == 1){
            qtdCalmos18++
        }
        i++;
    }
    document.write(`existem o total de  ${outroscalmos} pessoas calmas`);
    document.write(`<br>existem o total de ${femNervous} mulheres nervosas`);
    document.write(`<br>existem o total de ${maleAggre} homens agressivos`);
    document.write(`<br>existem o total de ${outroscalmos} pessoas calmes`);
    document.write(`<br>existem o total de  ${nervoso40} pessoas nervosas com 40 anos`);
    document.write(`<br>existem o total de  ${qtdcalmos18} pessoas calmas com menos de 18 anos`);


