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

// 7 - Mais Sobre Objetos
const obj = {
    a: "teste",
    b: true
};

console.log(obj instanceof Object);

const obj2 = {
    c: []
};

Object.assign(obj2, obj);

console.log(obj2);

console.log(obj);

// 8 - Conhecendo Melhor os Objetos
console.log(Object.keys(obj));

console.log(Object.keys(obj2));

console.log(Object.keys(car));

console.log(Object.entries(car));

// 9 - Mutação
const a = {
    name: "Kailane"
};

const b = a;

console.log(a);
console.log(b);

console.log(a === b);

a.age = 19;

console.log(a);
console.log(b);

delete b.age;

console.log(a);
console.log(b);

// 10 - Loop em Array
const users = ["Matheus", "João", "Pedro", "Miguel"];

for(let i = 0; i < users.length; i++){
    console.log(`Listando o usuário: ${users[i]}`);
}

// 11 - Push e Pop
const array = ["a","b","c"];

array.push("d");

console.log(array);

console.log(array.length);

array.pop();

console.log(array);

const itemRemovido = array.pop();

console.log(itemRemovido);

console.log(array);

array.push("x","y","z");

console.log(array);

// 12 - Shift e Unshift
const letters = ["a","b","c"];

const letter = letters.shift();

console.log(letter);

console.log(letters);

letters.unshift("p","q","r");

letters.unshift("z");

console.log(letters);

// 13 - IndexOf e LastIndexOf
const myElements = ["Morango", "Maçã", "Abacate", "Pêra", "Abacate"];

console.log(myElements.indexOf("Maçã"));

console.log(myElements.indexOf("Abacate"));

console.log(myElements[2]);

console.log(myElements[myElements.indexOf("Abacate")]);

console.log(myElements.lastIndexOf("Abacate"));

console.log(myElements.indexOf("Mamão"));

console.log(myElements.lastIndexOf("Mamão"));

// 14 - Slice
const testeSlice = ["a", "b", "c", "d", "e", "f"];

const subArray = testeSlice.slice(2, 4);

console.log(subArray);

console.log(testeSlice);

const subArray2 = testeSlice.slice(2, 4 + 1);

console.log(subArray2);

const subArray3 = testeSlice.slice(10, 20);

console.log(subArray3);

const subArray4 = testeSlice.slice(2);

console.log(subArray4);

// 15 - Foreach
const nums = [1, 2, 3, 4, 5];

nums.forEach((numero) => {
    console.log(`O número é ${numero}`);
})

const posts = [
    {title: "Primeiro post", category: "PHP"},
    {title: "Segundo post", category: "JavaScript"},
    {title: "Terceiro post", category: "Python"},
];

posts.forEach((post) => {
    console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`);
})

// 16 - Includes
const brands = ["BMW","VW", "Fiat"];

console.log(brands.includes("Fiat"));

console.log(brands.includes("KIA"));

if(brands.includes("BMW")){
    console.log("Há carros da BMW!");
}

// 17 - Reverse
const reverseTest = [1, 2, 3, 4, 5];

reverseTest.reverse();

console.log(reverseTest);

// 18 - Trim
const trimTeste = " Testando \n  "

console.log(trimTeste);

console.log(trimTeste.trim());

console.log(trimTeste.length);

console.log(trimTeste.trim().length);

// 19 - PadStart
const testePadstart = "1";

const newNumber = testePadstart.padStart(4, "0");

console.log(testePadstart);

console.log(newNumber);

const testePadEnd = newNumber.padEnd(10, "0");

console.log(testePadEnd);

// 20 - Split
const frase = "O rato roeu a roupa do rei de Roma";

const arrayDaFrase = frase.split(" ");

console.log(arrayDaFrase);

// 21 - Join
const fraseDeNovo = arrayDaFrase.join(" ");

console.log(fraseDeNovo);

const itensParaComprar = ["Mouse", "Teclado", "Monitor"];

const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}.`;

console.log(fraseDeCompra);