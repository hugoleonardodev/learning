var numeroAtual = [];
for (var index = 0; index <= 100; index++) {
    numeroAtual = index;
    for (var coluna = 0; coluna < 1; coluna++) {
        if (numeroAtual % 3 == 0 && numeroAtual % 5 == 0) {
            console.log("FizzBuzz");         
         }else if (numeroAtual % 3 == 0) {
            console.log("Fizz");
         }else if (numeroAtual % 5 == 0) {
            console.log("Buzz");
         }else{
            console.log(numeroAtual);
         }
    }
}
// conta de 0 até 100 e escreve FizzBuzz onde % 3 && # 5 == 0; Fizz onde % 3 == 0; Buzz onde % 5 == 0;
// OBS: no teste tem que definar a variavel numeroAtual antes, como demostrado no inicio...