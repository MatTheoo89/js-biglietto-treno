/* 

1 - chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.

2 - Calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

3 - L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali

*/
const prezzoKm = 0.21;
const kmDaFare = prompt('Inserisci i Km da fare');
const eta = prompt('Inserisci la tua età');
const scontoMinori = 0.20;
const scontoOver = 0.40;
let prezzoBiglietto;

if(eta <= 17){
  prezzoBiglietto = kmDaFare * (prezzoKm / (1 + scontoMinori));
}
else if(eta >= 65){
  prezzoBiglietto = kmDaFare * (prezzoKm / (1 + scontoOver));
}
else{
  prezzoBiglietto = kmDaFare * prezzoKm;
}

myOutput = `
<strong>Il prezzo del biglietto è: &euro; </strong> ${prezzoBiglietto};
`

document.getElementById('output').innerHTML = myOutput;


// CONSOLE log

console.log('kmDaFare ----->', kmDaFare);
console.log('eta ----->', eta);
console.log('prezzoBiglietto ----->', prezzoBiglietto);