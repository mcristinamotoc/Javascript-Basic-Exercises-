/*Exercici 5: Crea una variable nota_examen juntament amb un alert que ens digui si l’examen ha estat aprovat o no juntament amb la nota. (caldrà utilitzar un condicional IF */

var nota_examen = prompt("Introduce tu nota por favor: ");
const aprobado = 5;

if (nota_examen < aprobado) {
    alert("Oh has suspendido el examen con un " + nota_examen);
} else if (nota_examen >= aprobado <= 10) {
    alert("Enhorabuena, has aprobado el examen con un " + nota_examen);
}