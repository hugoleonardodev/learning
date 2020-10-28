function geraArray (caracter) {
    let array = [];
    for (let index = 0; index < 100; index += 1) {
        array.push(caracter);
    }
    return array;
};
console.log(geraArray('$'));
