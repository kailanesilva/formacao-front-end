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

// 7 - AppendChild
const navLinks = document.querySelector("nav ul");

const li = document.createElement("li");

navLinks.appendChild(li);

// 8 - ReplaceChild
const h2 = document.createElement("h2");

h2.textContent = "Meu Novo Título!";

header.replaceChild(h2, title);

// 9 - CreateTextNode

const myText = document.createTextNode("Agora vamos colocar mais um título");

console.log(myText);

const h3 = document.createElement("h3");

h3.appendChild(myText);

console.log(h3);

mainContainer.appendChild(h3);

// 10 - Trabalhando Com Atributos
const firstLink = navLinks.querySelector("a");

console.log(firstLink);

firstLink.setAttribute("href", "https://google.com");

console.log(firstLink.getAttribute("href"));

firstLink.setAttribute("target", "_blank");