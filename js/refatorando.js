//media
let num1 = 10;
let num2 = 20;
let num3 = 30;

let media = ((num1 + num2 + num3)/3);
console.log(media);

//refatorando media

function mean (num1, num2, num3) {
    return ((num1 + num2 + num3)/3);
}
console.log(mean(1, 2, 3));
// -------------------------------------------------

//Nome completo
let nome = 'Hugo';
let sobrenome = 'Leonardo';
let nomeCompleto = nome + ' ' + sobrenome;

console.log(nomeCompleto);

//refatorando nome completo
function fullName (nome, sobrenome) {
    return (nome + ' ' + sobrenome);
};

console.log(fullName('Gustavo', 'Caetano'));
//------------------------------------------------

//gerar array com 100 caracteres
function geraArray (caracter) {
    let array = [];
    for (let index = 0; index < 100; index += 1) {
        array.push(caracter);
    }
    return array;
};
console.log(geraArray('$'));
//-------------------------------------------------

//Mega Sena !!

