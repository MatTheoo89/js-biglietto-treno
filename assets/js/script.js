/* 

1 - chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.

2 - Calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

3 - L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali

*/

// prompt km da percorrere
const kmDaFare = parseInt(prompt('Inserisci quanti Km devi percorrere'));

console.log('kmDaFare ----->',kmDaFare);


//prompt età
const eta = parseInt(prompt('Inserisci la tua età'));

console.log('eta ----->',eta);

//costanti

// km percorsi * 0.21€
const prezzoKm = 0.21;

// sconto minori 20%
const scontoMinori = 0.20;

// sconto over65 40%
const scontoOver = 0.40;

//calcolo prezzo km inseriti

let tratta = kmDaFare * prezzoKm;

if (eta <= 18){
  tratta = kmDaFare * (prezzoKm / scontoMinori).toFixed(2); 
}
if(eta >= 65){
  tratta = kmDaFare * (prezzoKm / scontoOver).toFixed(2);
}

console.log('tratta ----->',tratta);


//prezzo biglietto

let prezzoBiglietto = tratta;


// output .tofixed(2)
let output;

