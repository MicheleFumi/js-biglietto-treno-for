/* console.log('ciao'); */


/* Descrizione:
 Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
MILESTONE 1: Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. 
La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2: Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. 
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). 
Questo richiederà un minimo di ricerca.
Nota: Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.
Nota 2:
Le milestone vanno seguite in ordine. Non passate alla richiesta della m2 se non avete prima completato la m1. */

//MILESTONE 1


 const formEL = document.querySelector('form')
 console.log(formEL)
 const cardEl = document.querySelector('.card-body')
 
 

//CREO L'EVENTO AL BOTTONE SUBMIT

formEL.addEventListener('submit', function (e) {
    e.preventDefault()
    //CREO LE VARIABILI DOVE SI SALVANO I DATI INSERITI DALL'UTENTE
     const memberNameEl = (e.target.memberName.value);
     const kmEl = (e.target.km.value);
     const ageEl =(e.target.age.value) ;
     const ticket_price = 0.21;
    //CREO UN CICLO CHE CONTROLLA EFFETTIVAMENTE CHE I VALORI INSERITI SIANO CORRETTI
   if (isNaN(memberNameEl) || !kmEl === '') {
    console.log(memberNameEl);
    console.log(kmEl);
    console.log(ageEl);
    
   } else{
    
    alert ("inserisci un valore corretto")   
    
   }
    // CREIAMO LA VARIABILE DI CALCOLO DI PREZZO A CHILOMETRO 
   let subtotal = kmEl * ticket_price ;
   console.log(subtotal);

   // CREIAMO DELLE VARIABILI DOVE SI CALCOLA LO SCONTO

let junior = (subtotal * 20) / 100;
let senior = (subtotal * 40) / 100;
// CREO LE VARIABILI CHE NELL'IF VERRANNO STAMPATE NELL'HTML
let discount ;
let message;
 
 
//LOGGHIAMO LE VARIABILI MENO LO SCONTO CALCOLATO PRIMA IN BASE ALLA CONDIZIONE NECESSARIA

if (ageEl ==="minorenne"){

    discount = ((subtotal - junior).toFixed(2));
    message = "<div> Tariffa Junior</div>"
    
}else if (ageEl === "senior >65"){
    discount = ((subtotal - senior).toFixed(2));
    message = "<div>Tariffa Senior</div>"
}else{
    discount = ((subtotal).toFixed(2));
    message = "<div>Tariffa Normale</div>"
} 

//CREO LA CARD CHE UNA VOLTA CHE L'UTENTE FORNISCE LE INFORMAZIONI CALCOLA LO SCONTO DEL BIGLIETTO E RIPORTA IL NOME
const memberEl =`

<h2 class="text-white text-center">IL TUO BIGLIETTO</h2>
<div class="container bg-white">
    <h3>dettaglio passeggeri</h3>
    <div class="row border border-dark text-center">

        <div class="col bg-secondary pt-2">
            <h4>NOME PASSEGGERO</h4>
            <div class="py-4"><strong>${memberNameEl}</strong></div>
        </div>

        <div class="col">
            <div class="py-2">
                <strong>offerta</strong>
                <div class="py-5">${message}</div>
                
            </div>
        </div>

        <div class="col">
            <div class="py-2">
                <strong>Carrozza</strong>
                <div class="py-5">5</div>
            </div>
        </div>

        <div class="col">
            <div class="py-2">
                <strong>Codice CP</strong>
                <div class="py-5">92911</div>
            </div>
        </div>

        <div class="col">
            <div class="py-2">
                <strong>Costo Biglietto</strong>
                <div class="py-5">${discount}€</div>
            </div>
        </div>

    </div>
</div>
`
cardEl.insertAdjacentHTML('beforeend', memberEl);

})







// MILESTONE 2

/* // FASE 1: CREIAMO I DUE DATI KM E ETA'
let name_surname;
let kilometer;
let age;
let ticket_price = 0.21;
  
//CALCOLIAMO SUBTOTAL
let subtotal = kilometer * ticket_price ;

//LOGGHIAMO KILOMETER, AGE E SUBTOTAL, 
console.log(kilometer);
console.log(age);
console.log(subtotal);


// FASE 2: CREARE LE CONDIZIONALI DI ETA'

// CREIAMO DELLE VARIABILI DOVE SI CALCOLA LO SCONTO

let junior = (subtotal * 20) / 100;
let senior = (subtotal * 40) / 100;
//LOGGHIAMO LE VARIABILI MENO LO SCONTO CALCOLATO PRIMA IN BASE ALLA CONDIZIONE NECESSARIA

if (age < 18){
 console.log((subtotal - junior).toFixed(2));
 
    
}else if (age > 65){
    console.log((subtotal - senior).toFixed(2));
    
}else{
    console.log(subtotal);
    
} */