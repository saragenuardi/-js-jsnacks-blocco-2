//  Generatore di "nomi cognomi" casuali: prendendo una lista di nomi e una
//lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

//Creazione lista nomi
const names = [ "Sara", "Sonia", "Anna", "Maria", "Vera"];
console.log(names)

//Creazione lista cognomi
const surnames = [ "Genuardi", "Rossi", "Bianchi", "Gialli", "Lorenzis"];
console.log(surnames);


//Array vuoto
const falseGuest = [ ];

//Generazione lista invitati

for(let i = 0; i < 3; i++) {
    const randomNamesIndex = Math.floor(Math.random() * (names.length));
    const randomNames = names[randomNamesIndex];
    console.log(randomNames);

    const randomSurnamesIndex = Math.floor(Math.random() * (surnames.length));
    const randomSurnames = surnames[randomSurnamesIndex];
    console.log(randomSurnames);

    const randomGuest = randomNames + ' ' + randomSurnames;
    falseGuest.push(randomGuest);
}

console.log(falseGuest);
