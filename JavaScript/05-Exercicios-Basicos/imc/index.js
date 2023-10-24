function Somar() {
  const peso = 82;
  const altura = 1.65;

  let imc = Number((peso / (altura * altura)).toFixed(2));

  let situacao = "";

  if (imc < 18.5) {
    situacao = "Baixo peso";
  } else if (imc >= 18.5 && imc <= 24.9) {
    situacao = "Peso normal";
  } else if (imc >= 25 && imc <= 29.9) {
    situacao = "Sobrepeso";
  } else if (imc >= 30 && imc <= 34.9) {
    situacao = "Obesidade I";
  } else if (imc >= 35 && imc <= 39.9) {
    situacao = "Obesidade II";
  } else if (imc >= 40) {
    situacao = "Informe seu peso corretamente";
  }
  return situacao;
}

console.log(Somar());
