/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto questo blocco.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- Workflow consigliato: prima costruisci la Versione Base in HTML/CSS,
  poi torna qui per la Versione Intermedia (generazione griglia da array di prodotti)
  e per la Versione Avanzata (filtri, ordinamento, carrello dinamico, localStorage).
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato in settimana.
*/


/* VERSIONE INTERMEDIA — array prodotti
   Crea l'array "prodotti" con almeno 12 oggetti.
   Ogni oggetto: nome, categoria, prezzo, rating (1-5), immagine, disponibile.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* Categorie: elettronica, casa, libri e abbigliamento */
const prodotti = [
   {
      nome : 'iphone',
      categoria : 'elettronica',
      prezzo: '1000',
      rating: '5',
      immagine: 'images.jpg',
      disponibile: true
   },
   {
      nome : 'tablet',
      categoria : 'elettronica',
      prezzo: '300',
      rating: '4',
      immagine: 'images.jpg',
      disponibile: true
   },
   {
      nome : 'penna',
      categoria : 'libri',
      prezzo: '1',
      rating: '5',
      immagine: 'images.jpg',
      disponibile: false
   },
   {
      nome : 'zaino',
      categoria : 'libri',
      prezzo: '20',
      rating: '4',
      immagine: 'images.jpg',
      disponibile: false
   },
   {
      nome : 'pentola',
      categoria : 'casa',
      prezzo: '15',
      rating: '2.7',
      immagine: 'images.jpg',
      disponibile: true
   },
   {
      nome : 'tavolo',
      categoria : 'casa',
      prezzo: '200',
      rating: '5',
      immagine: 'images.jpg',
      disponibile: false
   },
   {
      nome : 'astuccio',
      categoria : 'libri',
      prezzo: '4',
      rating: '4',
      immagine: 'images.jpg',
      disponibile: false
   },
   {
      nome : 'cucina',
      categoria : 'casa',
      prezzo: '6000',
      rating: '4',
      immagine: 'images.jpg',
      disponibile: true
   },
   {
      nome : 'letto ',
      categoria : 'casa',
      prezzo: '800',
      rating: '3.5',
      immagine: 'images.jpg',
      disponibile: true
   },
   {
      nome : 'computer',
      categoria : 'elettronica',
      prezzo: '750',
      rating: '5',
      immagine: 'images.jpg',
      disponibile: true
   },
   {
      nome : 'scarpe',
      categoria : 'abbigliamento',
      prezzo: '100',
      rating: '4.9',
      immagine: 'images.jpg',
      disponibile: false
   },
   {
      nome : 'giacca',
      categoria : 'abbigliamento',
      prezzo: '75',
      rating: '2.8',
      immagine: 'images.jpg',
      disponibile: true
   }
]
console.log(prodotti);


/* VERSIONE INTERMEDIA — formattaPrezzo(prezzo)
   Funzione che ritorna una stringa tipo "€ 19,99".
   Esempio in console.log: Monitor: € 150,00
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function formattaPrezzo(prezzo){
   for(i=0; i<prodotti.length; i++)
   {
      if(prezzo === prodotti[i].prezzo)
      {
          console.log(prodotti[i].nome + ': €' + prodotti[i].prezzo);
      }
   }
}

formattaPrezzo('750');


/* VERSIONE INTERMEDIA — stelline(rating)
   Funzione che ritorna una stringa di stelline piene/vuote.
   Esempio: rating 3 → "★★★☆☆"
   Esempio in console.log: Monitor: rating 3 → "★★★☆☆"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function stelline(rating) {
    let risultato = "";
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            risultato += "★";
        } else {
            risultato += "☆";
        }
    }

    return risultato;
}
console.log('Monitor: rating 3 → ' + stelline(3));

/* VERSIONE INTERMEDIA — Filtro per categoria
   Funzione che riceve il parametro categoria e filtra l'array prodotti mostrando solo i prodotti della categoria ricevuta
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function Filtro(categoria){
   for(i=0; i < prodotti.length; i++)
   {
      if(categoria === prodotti[i].categoria)
      {
       console.log(prodotti[i]);
      }
   }
}
Filtro('elettronica');

/* VERSIONE INTERMEDIA — Filtro disponibilità e rating
   Funzione che genera un array filtrato dall'array prodotti, mostrando soltanto i prodotti disponibili con rating >= 3
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function FiltroDispRating(rating){
   for(i=0; i < prodotti.length; i++)
   {
      if(prodotti[i].rating >= '3' && prodotti[i].disponibile === true)
      {
       console.log(prodotti[i]);
      }
   }
}
FiltroDispRating('3');

/* --------------------------------------------------------------

/* VERSIONE AVANZATA — renderProdotti(lista)
   Funzione che, dato un array di prodotti, genera la griglia nel DOM.
   Niente HTML hard-coded per i prodotti: tutto generato dal JavaScript.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function renderProdotti(lista) {

    document.body.innerHTML = `
        <table >
            <tr>
                <th>Nome</th>
                <th>Categoria</th>
                <th>Prezzo</th>
            </tr>
        </table>
    `;
    let table = document.querySelector('table');
    table.style.border='1px solid black';

    for (let i = 0; i < lista.length; i++) {

        document.querySelector('table').innerHTML += `
            <tr>
                <td>${lista[i].nome}</td>
                <td>${lista[i].categoria}</td>
                <td>${lista[i].prezzo} €</td>
            </tr>
        `;
    }
}

renderProdotti(prodotti);


/* VERSIONE AVANZATA — Aggiungi al carrello
   Quando si clicca il bottone "Aggiungi al carrello", incrementa il contatore
   nell'header (Carrello (0) → Carrello (1) → ...).
   Per i prodotti esauriti: bottone disabilitato e testo "Esaurito".
   Suggerimento: usa una closure come visto in aula
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — Ordinamento
   Menu a tendina con: Prezzo crescente, Prezzo decrescente, Rating.
   Suggerimento: per rendere più leggibile la select puoi usare optgroup
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — Riepilogo carrello
   Pagina carrello con elenco prodotti aggiunti, totale, bottone "Svuota".
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — localStorage
   Il carrello sopravvive al refresh della pagina.
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
