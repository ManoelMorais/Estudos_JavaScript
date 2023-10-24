// 1 - Functions declaration 
function isValidDeclaration(){
    const soma = 1 + 2;

    if(soma === 3){
        return true // se der verdadeiro, ele anula o return de la de baixo
        console.log(123) // ta anulado pq o return e valido
    } else {
        return false
    }

    return "não virou um dado valido";
}
 console.log(isValidDeclaration())



// 2 - Functions expression
const isValidExpression = function(){
    return false;
}

console.log(isValidExpression())

//3 - Arrow Function
const isvalidArrow = () => {
    const multi = 2 * 2

    return multi;
};

console.log(isvalidArrow())