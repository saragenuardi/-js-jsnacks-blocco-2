//Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente.

//Chiedi all'utente di inserire un numero
const numero = parseInt(prompt('Inserisci un numero'));

//Calcolo della potenza al cubo
for (let index = 1; index <= numero; index++) {
    potenza = index * index * index;
    //Risultato
    console.log("Il numero che hai inserito è", index, "Questo numero al cubo è", potenza);
}

//Stampa il risultato in HTML
document. getElementById('numero-inserito').innerHTML = "Il numero che hai inserito è " + numero;
document. getElementById('cubo').innerHTML = "Questo numero al cubo è " + potenza;

