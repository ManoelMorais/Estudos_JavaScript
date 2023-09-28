// IIFE = Immmerdiately Invoked Function Expression
// IIFE = Expressão de função inovada imediatamente

//função alto se invoca 
(function(){
    const calc = num1 + num2
    console.log(calc)
})(1,2);

((win, doc) => {
    console.log(win);
    console.log(doc)
})(window, document);




//exemplo de como é 
// function consol(con){
//     return console.log(con)
// }

// consol("Denner Troquatte");