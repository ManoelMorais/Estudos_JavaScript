/*
    Objeto: Tenis (Propriedade) "cadarço", "palmilha"
    Objeto: Celular (Propriedade)
    Objeto: Drone (Propriedade)

    Propriedade / Atributo / Funcionalidade 
*/

let tenis = {
  tipo: "Tenis de corrida",
  cadarco: "G",
  cor: "Azul",
  estoque: false,
  tamanho: {
    palmilha: 39,
    tenis: 40,
    caixa: {
      altura: 35,
      largura: 40,
      profundidade: 10,
    },
  },
  ArrayValores: ["nike", "adidas", "puma"],
  ArrayObjetos: [
    {
      nome: "nike",
      valor: 30, 
    },
    {
      nome: "adidas",
      valor: 10,
    },
    {
      nome: "puma",
      valor: 20,
    },
  ],
  getMarcas: function(param){
    return this.ArrayObjetos[param].nome;
  },
  getValores: function(){
    return this.ArrayValores
  }
};
