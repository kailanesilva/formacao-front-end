// 1 - Variáveis
let nome = "Kailane";

console.log(nome);

nome = "Kailane Silva";

console.log(nome);

const idade = 19;

console.log(idade);

//variáveis como const não podem ter seus valores mudados. Uma vez atríbuido, não aceita mudanças.

console.log(typeof nome);

console.log(typeof idade);

// 2 - Mais Sobre Variáveis
//let 2teste = "inválido"
//let @teste = "inválido"

let a = 10, b = 20, c = 30;

console.log(a, b, c);

let nomecompleto = "Kailane Silva";

let nomeCompleto = "João da Silva";

console.log(nomecompleto);

console.log(nomeCompleto);

let _teste = "ok";
let $teste = "ok";

console.log(_teste, $teste);

// Nomes reservados - Jamais declarar variáveis com funcionalidades do JavaScript, como:
/* break case catch class const continue debbuger default delete do else enum export extends
false finally function if implements import interface in instanceof let new package
private protected public return static super switch this throw true try typeof
var void while with yield*
É possível unir ela a outra palavra pra formar a variável. Ex: let breakTeste = 1;*/

// 3 - Prompt
//const age = prompt("Digite a sua idade:");

//console.log(`Você tem ${age} anos.`);

// 4 - Alert
//alert("Testando a função alert");

//const z = 10;

//alert(`O número é ${z}`);

// 5 - Math
console.log(Math.max(5, 2, 1, 10));

console.log(Math.min(1, 2, 3, 4, 5));

console.log(Math.floor(5.14));

console.log(Math.ceil(5.14));

// 6 - Console
console.log("teste!");

console.error("Erro!");

console.warn("Aviso!");

// 7 - If
const m = 10;

if(m > 5){
    console.log("M é maior que 5!");
}

const user = "João";

if(user === "João"){
    console.log("Olá, João!");
}

if(user === "Maria"){
    console.log("Olá, Maria!");
}

console.log(user === "João", user === "Maria");

// 8 - Else
const loggedIn = false;

if(loggedIn){
   console.log("Está autenticado!");
} else{
    console.log("Não está autenticado!");
}

const q = 10;
const w = 15;

if(q > 5 && w > 20){
    console.log("Números mais altos");
} else{
    console.log("Os números não são mais altos");
}

// 9 - Else if
if(1 > 2){
    console.log("Teste");
} else if(2 > 3){
    console.log("Teste 2");
} else if(5 > 1){
    console.log("Agora sim");
}

const userName = "Kailane";
const userAge = 19;

if(userName === "José"){
    console.log("Bem vindo José!");
} else if(userName === "Kailane" && userAge === 19){
    console.log("Olá Kailane, você tem 19 anos!");
} else{
    console.log("Nenhuma das condições foram aceitas!")
}

// 10 - While
let p = 0;

while(p < 5){
    console.log(`Repetindo: ${p}`)
    p++
}

/*Loop infinito
let x = 10;

while(x > 5){
    console.log(`Repetindo: ${x}`)
}
*/

// 11 - Do While
let o = 10;
do{
    console.log(`Valor de o: ${o}`)
    o--
} while(o > 1)

// 12 - For
for(let t = 0; t < 10; t++){
    console.log(`Repetindo algo...`)
}

let r = 10;
for(r; r > 0; r = r - 1){
    console.log(`O r está diminuindo: ${r}`)
}

// 13 - Identação (espaço para organizar o código. Veja no exemplo abaixo um código sem identação e observe como fica difícil de entender)

for(let u = 0; u < 10; u++){
if(u * 2 > 10){
console.log(`Maior que 10! ${u}`)
} else{
if(u / 2 === 0){
console.log(`Deu 0`)
}
}
}

// 14 - Break
for(let g = 20; g > 10; g--){
    console.log(`O valor de g é: ${g}`)

    if(g === 15){
        console.log(`g é 15!`)
        break;
    }
}