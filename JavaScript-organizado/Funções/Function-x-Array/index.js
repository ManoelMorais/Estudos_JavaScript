/*
    1 = Nome de função
    2 = Retorno
    3 = Não tem Hoisting
    4 = Arguments
*/
    // modo 1
    function nomeFunc(){
        return "Dener Troquatte";
    };
    console.log(nomeFunc());


    // modo 2
    const nomeFuncArrow = () => {
        return "dener Truquatte";
    };
    console.log(nomeFuncArrow());


    // modo 3
    const nomeFuncArrowReturn = () => "Dener Turquatte";
    console.log(nomeFuncArrowReturn());


    // modo 4 
    const nomeFuncArrowHoisting = () => {
        return "Dener Troquatte";
    };
    console.log(nomeFuncArrowReturn());


    // modo 5 não funciona
    // const nomeFuncArrowArguments = () => {
    //     return arguments;
    // };
    //console.log(nomeFuncArrowReturn());

    // modo 6
    function nomeFuncArguments(){
        return arguments;
    }
    console.log(nomeFuncArguments("Dener Troquatte"))


    // modo 7
    const nomeFuncArrowParams = (param) => param;


/* 
    5 = Não pode ser invocada com New
*/
    // function novaFunc(){
    //     return 123;
    // };
    // new novaFunc();

    // const novaFuncArrow = () => {
    //     return console.log(123)
    // };
    // new novaFuncArrow();

    class newFunc{
        constructor(nome){
            this.nome = nome
        }
    }
    const a = new newFunc("Denner Traquatte");
    console.log(a.nome)


/*
    6 = Contexto
    Arrow functions possuem this léxico enquanto o modelo normal possui this dinãmico.

    Isso significa que arrow functions herdam o contexto local de onde foi declarado, 
    enquanto o modelo normal possui o contexto associado ao objecto que ele está vinculado 
    no momento da chamada

    Se ele não estiver associado a ninguém na chamada, ele assumurá this automatucamente 
    com o contexto global, que no caso dos navegadores é window
*/

    const lanches = {
        cardapio: [
            {nome: "x-salada", preco: "R$ 25"},
            {nome: "x-tudo", preco: "R$ 40"},
        ],

        meuPedidoFunc: function (select) {
            return console.log(this.cardapio[select])
        },

        meuPedidoFunctimeOut: function () {
            setTimeout(function () {
                console.log(this.cardapio);
                console.log(this);
            }.bind(this),
            1000
            );
        },

        meuPedidoArrowFunc: (select) => {
            this.cardapio = [
                {nome: "x-salada", preco: "R$ 25"},
                {nome: "x-tudo", preco: "R$ 40"},
            ]
            return console.log(this.cardapio[select])
        },
    }
    lanches.meuPedidoFunc(0);
    lanches.meuPedidoArrowFunc(1);
/*
    7 = Constructor
    Arrow functions não podem ser constructors, então não é possivel usar o operador new com a mesma.
*/
