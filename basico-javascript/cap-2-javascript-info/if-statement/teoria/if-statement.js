/**
 * O if(...) é um avaliador lógico que considera uma condição e a depender do resultado
 * dessa condição ele muda o fluxo do código e executa um bloco de código dentro daquela condição
 *
 */

/**
 * A clausula Else ou else
 * A clausula else é executada quando a condição lógica do bloco if é falsa, o fluxo de código
 * muda para o bloco do else e segue em frente.
 */

/**
 * Já a clausula Else if é uma clausula que avalia uma outra condição e se essa condição
 * for verdadeira o fluxo de código muda para aquela condição.
 */

//Exemplo
let year = Number(prompt("Em qual ano o javascript foi criado? "));

if (year === 2015) {
  alert("You are right");
} else {
  alert("You are wrong");
}

//Sintaxe do operador condicional ternário "?"
//condição ? resultadoTrue : resultadoFalse
//você também pode usar multiplas condições ternárias encadeadas segue o exemplo abaixo

/**
 * let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

    alert( message );
 */

let age = Number(prompt("Informe a sua idade: "));
let accessAllowed = age > 18 ? true : false;

alert(accessAllowed);
