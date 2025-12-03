//exercicio 4
function calcularDesconto(valorCompra = 0, descPorcentagem = 0, isVIP = false) {
  if (isVIP) {
    if (valorCompra < 100) {
      descPorcentagem = 10;
      let precoDesc = ((100 - descPorcentagem) / 100) * valorCompra;
      return parseFloat(precoDesc);
    } else if (valorCompra > 500.01 && valorCompra < 1000) {
      descPorcentagem = 20;
      let precoDesc = ((100 - descPorcentagem) / 100) * valorCompra;
      return parseFloat(precoDesc);
    }
  }
}

//Testes
console.log(calcularDesconto(90, 0, true));

console.log(calcularDesconto(600, 0, true));
