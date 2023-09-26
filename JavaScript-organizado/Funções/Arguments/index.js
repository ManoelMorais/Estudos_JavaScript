// parte 1
function Soma(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  }
  return "dados diferentes foram transferidos!";
}

console.log(Soma(5, 5))
// console.log(Soma(Soma(2, 3), Soma(3, 2)));


// parte 2 
function Subtracao(){
    return arguments;
}

console.log(Subtracao())

// não aconselhado usar muito o arguments

//parte 3
function Cacl(num1 = NaN, num2 = NaN) {
    if (typeof num1 === "number" && typeof num2 === "number") {
      return num1 - num2;
    }
    return "dados diferentes foram transferidos!";
  }

console.log(Cacl(2, 5))


// parte 4
function Cacl(num1 = 0, num2 =  0) {
    if (typeof num1 === "number" && typeof num2 === "number") {
      return num1 - num2;
    }
    return "dados diferentes foram transferidos!";
  }

console.log(Cacl(2, 5))
