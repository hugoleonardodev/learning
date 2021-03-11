var numeroAtual = 0;
var fizzBuzz = []
for (var index = 1; index <= n; index++) {
    numeroAtual = index;
    for (var coluna = 0; coluna < 1; coluna++) {
        if (numeroAtual % 3 == 0 && numeroAtual % 5 == 0) {
        fizzBuzz.push("FizzBuzz");
            console.log("FizzBuzz");         
        }else if (numeroAtual % 3 == 0) {
            fizzBuzz.push("Fizz");
            console.log("Fizz");
        }else if (numeroAtual % 5 == 0) {
            fizzBuzz.push("Buzz");
            console.log("Buzz");
        }else{
            fizzBuzz.push(numeroAtual)
            console.log(numeroAtual);
        }
    }
}

return fizzBuzz;
// conta de 0 até 100 e escreve FizzBuzz onde % 3 && # 5 == 0; Fizz onde % 3 == 0; Buzz onde % 5 == 0;
// OBS: no teste tem que definar a variavel numeroAtual antes, como demostrado no inicio...