for (var index = 0; index <= 100; index++) {
    numeroAtual = index;
    for (var coluna = 0; coluna < 1; coluna++) {
         if (numeroAtual % 3 == 0) {
            console.log("Fizz");
         }else if (numeroAtual % 5 == 0) {
            console.log("Buzz");
         }else{
            console.log(numeroAtual);
         }
    }
}
// conta todos os numeros de 0 até 100 e escreve "Fizz" nos numeros divisiseis por 3 ou "Buzz" nos divisiveis por 5