// Exercici 7: Donat el seguit llistat d’objectes ‘taula’, ‘cadira’, ‘ordinador’, ‘libreta’, per un bucle que mostri per pantalla cada objecte i la save posició al llistat.

var objectes = ["taula", "cadira", "ordinador", "libreta"];

for (i = 0; i < objectes.length; i++) {
    console.log("L'objecte " + objectes[i] + " està a la posició " + i);
}