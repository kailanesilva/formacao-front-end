// 1 - setTimeout
console.log("Ainda não executou");

setTimeout(function() {

    console.log("Requisição assíncrona");

}, 2000);

console.log("Ainda não executou 2");

// 2 - setInterval
console.log("Ainda não começou");

//setInterval(function() {
    //console.log("Intervalo assíncrono");
//}, 2000);

console.log("Ainda não começou 2");

// 3 - Promise
const promessa = Promise.resolve(5 + 5);

console.log("Algum código");

promessa
  .then((value) => {
    console.log(`A soma é ${value}`);
    return value;
})
.then((value) => value -1)
.then((value) => console.log(`Agora é ${value}`));

console.log("Outro código");

