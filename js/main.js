// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// prendiamo il container da HTML
const containerGrid = document.querySelector(".grid-container");

// prendiamo il bottone da HTML
const playButton = document.querySelector("button");

// crea un evento al click del bottone
playButton.addEventListener("click", 
    function(){
        containerGrid.classList.add("play");
        playButton.classList.add("none")
    }
);
// Ogni cella ha un numero progressivo, da 1 a 100.

// Ci saranno quindi 10 caselle per ognuna delle 10 righe.

// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.