var numbers = [3, 13, 4, 11, 9];
for (index = 0; index < 1; index++) {
    soma = numbers[index] + numbers[index + 1];
}
for (index = 2; index < numbers.length; index++) {
    soma = soma + numbers[index];
}
console.log(soma);
// soma dos numeros de um Array, exemplo: numbers=[3, 13, 4, 11, 9], soma-se os dois primeiros elementos e depois soma-se
// o resultado da soma dos dois primeiros com os elementos seguintes até o enésimo elemento.
// o uso de dois for cobre um caso específico em que os numeros são muito grandes