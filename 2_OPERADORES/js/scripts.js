// 1 - Number
console.log(typeof 2);
console.log(typeof 5.14);
console.log(typeof -127);

// 2 - Operações Aritméticas
console.log(5 + 2);
console.log(6 - 5);
console.log(15 * 2);
console.log(10 / 2)
console.log(5 + (4 * 2));

// 3 - Special Numbers
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(typeof NaN);
console.log(2 * 'love');

// 4 - Strings
console.log("Um texto");
console.log('Outro texto');
console.log(`Mais um texto`);

console.log(typeof "Um texto");
console.log(typeof 'Outro texto');

// 5 - Símbolos Especiais em String
console.log("Testando a \n quebra de linha");
console.log("Espaçamento \t de tab");

// 6 - Concatenação
console.log("Oi," + " tudo" + " bem?");
console.log(`Testando` + ` com` + ` crase!`);

// 7 - Template Strings - Interpolação
console.log(`A soma de 2 + 2 são: ${2 + 2}`);

// 8 - Boolean
console.log(true);
console.log(5 > 20);
console.log(30 > 10);
console.log(typeof false);

// 9 - Comparações
console.log(5 <= 5);
console.log(5 < 5);
console.log(10 == 10);
console.log(10 == 9);
console.log(10 != 9);

// 10 - Valores Idênticos
console.log(9 == "9");
console.log(9 === "9");
console.log(9 != "9");
console.log(9 !== "9");

/* 11 - Operadores Lógicos - Unir duas ou mais comparações
&& - AND - true apenas se os dois lados forem verdadeiros;
|| - OR - para ser true, um lado como true é suficiente;
! - NOT - este operador inverte a comparação;
*/
console.log(true && true);
console.log(true && false);
console.log(5 > 2 && 2 < 10);
console.log(5 > 2 || "Kailane" === 1);
console.log(5 > 2 && "Kailane" === 1);
console.log(5 < 2 || 5 > 100);
console.log(!true);
console.log(!5 > 2);

// 12 - Empty Values
console.log(typeof undefined, typeof null);
console.log(null == undefined);
console.log(null === undefined);
console.log(null == false);
console.log(undefined == false);