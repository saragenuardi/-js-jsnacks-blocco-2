//Il software deve chiedere per 5 volte all'utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.
//Esegui questo programma in due versioni, con il for e con il while.


//Dato
let somma = 0;

//Chiedi per 5 volte di inserire un numero all'utente con Ciclo FOR e calcola la somma di tutti i numeri
for (let i = 0; i < 5; i++) {
    let numero = parseInt(prompt("Inserisci un numero"));
    somma += numero;
}

//Risultato for
console.log(somma);


// Ciclo WHILE

//Dato
let contatore = 0;
let sommaS = 0;

//Calcola la somma du tutti i numeri inseriti
while (contatore < 5) {
    const numeroS = parseInt(prompt("Dimmi altri numeri"))
    sommaS += numeroS;
    contatore++;
}

//Risultato while
console.log(sommaS);