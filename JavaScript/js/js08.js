let num = [9,4,0,1,5,3,7]
num.sort()
console.log(num)

//console.log(num)
//console.log(`O vetor é composto por ${num})
//num[3] = 6
//num.push(10)
//num.length atributo, feito para sabser quantas casas tem um array
//
//num.indexOf(7) ta na casa 6
//num.indexOf(2) não encontrou então ele volta no -1
//
//num.splace() remover valor especifico
//num.push() add no final. Tomar cuidado com o push pq dependendo de onde colocalo ele muda no resultado, ordem influencia 
//num.pop() remover do final
//num.sort() coloca em ordem crescente
//num.unshift() add no inicio
//num.shift() remover do inicio
//
//console.log(num)

//console.log(`O vetor e composto por ${num.length}`)
//console.log(`O primeiro vetor é ${num[0]}`)
//let pos = num.indexOf(2)
//if (pos == -1){
//    console.log('O valor não foi encontrado!')
//} else {
//   console.log(`O valor 5 está na posição ${pos}`)
//}


//for (let res=0; res < valores.length; res++){
//    console.log(`A posilçao ${res} tem o valor ${valores[res]}`)
//}
//
//
//para cada posição dentro de num vou mostrar a variavel composta
for (let res in num){
   console.log(`A posição ${res} tem o valor ${num[res]}`)
}


// array 
// let num = [5,8,5]
//          5  8  5
//equivale  0  1  2
//


//Object
//let amigo = {nome:'manoel', sexo:'m',peso:70.4, engordar(p){}}
//                                               [function]
//          Add o simbolo de preço 
//document.write(`Preço total ${preço. toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
//
//console.log(new Intl.NumberFormat('pt-BR').format(precoTotal))
//
//