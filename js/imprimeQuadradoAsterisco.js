var n = 4;
for (var index = 0; index < n; index++){
    var linhaDeAsteriscos = "";
    for (var linha = 0; linha < n; linha++){
        linhaDeAsteriscos += " *";
    }
    console.log(linhaDeAsteriscos);
}   

 // imprime um quadrado de asteriscos com parâmetro n igual a um número inteiro