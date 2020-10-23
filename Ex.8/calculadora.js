/* Exercici 8:
Crea una funció anomenada calculadora que tingui com a entrada els següents paràmetres: operador, valor1 i valor2.
Estructura de la funció que faci sumes, restes i multiplicacions. El resultat haurà de ser mostrar per pantalla.
function calculadora( __ __ __){
……...
}
var resultat = calculadora(‘resta’,40,20);*/

function calculadora(operador, valor1, valor2) {
    if (operador == "suma") {
        console.log(valor1 + valor2);
    } else if (operador == "resta") {
        console.log(valor1 - valor2);

    } else if (operador == "multiplicar") {
        console.log(valor1 * valor2);
    }
}
console.log(calculadora("resta", 40, 20));
console.log(calculadora("suma", 2, 13));
console.log(calculadora("multiplicar", 7, 6));