/*
Demo: не меняй код.
Объясни различия == и === и особенности NaN.
*/

console.log("=== Task 06 Demo ===");

console.log("0 == false:", 0 == false);//true
console.log("0 === false:", 0 === false);//false
console.log("'' == 0:", "" == 0); //true, потому что '' приводится к числу 0
console.log("'' === 0:", "" === 0); //false, потому что сравниваются разные типы (строка и число)

console.log("null == undefined:", null == undefined);//true, потому что null и undefined считаются равными при нестрогом сравнении
console.log("null === undefined:", null === undefined);//false, потому что null и undefined имеют разные типы

console.log("NaN === NaN:", NaN === NaN); //false, потому что NaN не равен самому себе по стандарту
console.log("Number.isNaN(NaN):", Number.isNaN(NaN)); //true