let estudante = {
    nome: 'Joana',
    idade: 34,
    hardSkills: 10,
    softSkills: 9,
    carreiraSkills: 5,
};

estudante.cidade='Belo Horizonte';
estudante['comidaFavorita'] = 'Camarao';
estudante['nome'] = 'Hugo';
estudante.apelidos = ['Pelosso', 'Gato Seco', 'Dry Cat'];
estudante.enderco = {
    logradouro: 'Rua Jequitiba Vermelho',
    numero: 357,
    complemento: 'casa 1'
}

console.log(estudante);
// exibindo as keys
for (let key in estudante) {
    console.log(key);
}

for (let key in estudante) {
    console.log(estudante[key]);
}

for (let key in estudante) {
    console.log(key, estudante[key]);
}
// atribuindo outros valores ao objeto estudante com
// com a funcao trybe e depois imprimindo com console.log
function trybe(estudanteTrybe) {
    let pessoaDesenvolvedora = estudanteTrybe;
    
    pessoaDesenvolvedora.hardSkills = 9;
    pessoaDesenvolvedora.softSkills = 7;
    pessoaDesenvolvedora.carreiraSkills = 10;
    pessoaDesenvolvedora.tryber = true;

    return pessoaDesenvolvedora;
};

console.log(trybe(estudante));

