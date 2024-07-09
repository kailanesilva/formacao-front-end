// 1 - Movendo-se pelo DOM
console.log(document.body);

console.log(document.body.childNodes[1]);

console.log(document.body.childNodes[1].childNodes);

console.log(document.body.childNodes[1].childNodes[1].textContent);

// 2 - Selecionando Elementos Por Tag
const listItens = document.getElementsByTagName("li");

console.log(listItens);

// 3 - Selecionando Elementos por ID
const title = document.getElementById("title");

console.log(title);

// 4 - Selecionando Elementos por Classes
const products = document.getElementsByClassName("products");

console.log(products);

// 5 - Selecionando Elementos por CSS
const productsQuery = document.querySelectorAll(".products");

console.log(productsQuery);

const mainContainer = document.querySelector("#main-container");

console.log(mainContainer);

// 6 - InsertBefore
const p = document.createElement("p");

const header = title.parentElement;

console.log(header);

header.insertBefore(p, title);