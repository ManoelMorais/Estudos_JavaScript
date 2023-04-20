
///Função

        //Primeira
//function soma(n1=0, n2=0){ //caso tenha faltando um número ele fica igual a 0 
//    return n1 + n2
//}

//console.log(soma(2,))

        //Segunda
//let c = function(x){
//    return x*2
//}
//console.log(c(5))

//RECURSIVIDADE
function fatorial(n){
    if (n < 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))

/*
5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!

n! = n x (n-1)!
1! = 1
*/