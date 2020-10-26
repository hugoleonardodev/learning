var rating = "Good";
if (rating === "Terrible" || rating === "Poor") {
    var tipPercentage = 3;
    }else if (rating === "Good" || rating === "Great"){
    var tipPercentage = 10;
    }else if (rating === "Excellent") {
    var tipPercentage = 20; 
    }else{
    var tipPercentage = 0; 
    }
console.log(tipPercentage);    

// a função retorna o valor da porcentagem da gorgeta (tipPercentage) de acordo com a avaliação (rating, uma string),
// se a string não for nenhuma das citadas, o valor da gorjeta é 0;
