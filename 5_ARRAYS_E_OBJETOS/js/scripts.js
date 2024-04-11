// 1 - Arrays
const lista = [1, 2, 3, 4, 5];

console.log(lista);

console.log(typeof lista);

const itens = ["Kailane", true, 2, 4.12, []];

console.log(itens);

// 2 - Mais Sobre Arrays
const arr = ["a","b","c","d","e"];

console.log(arr[0]);

console.log(arr[2]);

console.log(arr[83]);

// 3 - Propriedades
const numbers = [5, 3, 4];

console.log(numbers.length);

console.log(numbers['length']);

const myName = "Kailane";

console.log(myName.length);

// 4 - Métodos
const otherNumbers = [1, 2, 3];

const allNumbers = numbers.concat(otherNumbers);

console.log(allNumbers);

const text = "algum texto";

console.log(text.toUpperCase());

console.log(typeof text.toUpperCase);

console.log(text.indexOf("g"));

// 5 - Objetos
const person = {
    name: "Kailane",
    age: 19,
    job: "Programadora"
};

console.log(person);

console.log(person.name);

console.log(person.name.length);

console.log(person.age);

console.log(person.job);

console.log(typeof person);

// 6 - Criando e Deletando Propriedades
const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 20000,
};

console.log(car);

car.doors = 4;

console.log(car);

delete car.km;

console.log(car);