/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

const h1 = document.getElementsByTagName('h1')
console.log(h1)
const title = 'Ciao, sono Giada'

const changeTitle = function (titolo, testo) {
  titolo[0].innerText = testo
}

changeTitle(h1, title)

/* ESERCIZIO 2
       Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
    */

const classe = 'myHeading'

const addClassToTitle = function (titolo, nomeClasse) {
  titolo[0].setAttribute('class', nomeClasse)
}

addClassToTitle(h1, classe)

/* ESERCIZIO 3
       Scrivi una funzione che cambi il testo dei p figli di un div
      */

const p = document.querySelectorAll('div p')
console.log(p)
const contenuto = 'Ho cambiato questo testo!'

const changePcontent = function (par, cont) {
  for (let i = 0; i < par.length; i++) {
    par[i].innerText = cont
  }
}

changePcontent(p, contenuto)

/* ESERCIZIO 4
       Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
      */

const linkGoogle = 'https://www.google.com'
const linkPage = document.getElementsByTagName('a')
console.log(linkPage)

/* const changeUrls = function (a, link, b) {
  for (let i = 0; i < a.length; i++) {
    a[i].closest(b)
    if (b !== 'footer') {
      a.setAttribute('href', link)
    }
  }
} */

//changeUrls(linkPage, linkGoogle)

/* ESERCIZIO 5
       Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
    */

const secondList = document.querySelectorAll('body ul')[1]
console.log(secondList)
const quarto = '4th'

const addToTheSecond = function (lista, testo) {
  const nuovoLi = document.createElement('li')
  nuovoLi.innerText = testo
  lista.appendChild(nuovoLi)
}
addToTheSecond(secondList, quarto)

/* ESERCIZIO 6
       Scrivi una funzione che aggiunga un paragrafo al primo div
    */

const primoDivP = document.querySelector('body div')
console.log(primoDivP)
const testoP = 'Questo è un nuovo testo AGGIUNTO CON UNA FUNZIONE'

const addParagraph = function (div, testo) {
  const nuovoP = document.createElement('p')
  nuovoP.innerText = testo
  div.appendChild(nuovoP)
}
addParagraph(primoDivP, testoP)

/* ESERCIZIO 7
Scrivi una funzione che faccia scomparire la prima lista non ordinata
*/

const primaLista = document.querySelector('body ul')
console.log(primaLista)

const hideFirstUl = function (lista) {
  lista.remove()
}
hideFirstUl(primaLista)

/* ESERCIZIO 8 
Scrivi una funzione che renda verde il background di ogni lista non ordinata
*/

const ul = document.querySelectorAll('ul')
console.log(ul)

const paintItGreen = function (lista) {
  for (let i = 0; i < lista.length; i++) {
    lista[i].style.backgroundColor = 'green'
  }
}
paintItGreen(ul)

/* ESERCIZIO 9
       Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
      */

const makeItClickable = function () {}

/* ESERCIZIO 10
       Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
      */

const revealFooterLink = function () {}

/* ESERCIZIO 11
       Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
       La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
    */

const area = document.getElementById('tableArea')
const info = [
  ['Giada', 'Tonni', '23', 'Roma'],
  ['Giorgia', 'Bianchi', '24', 'Milano'],
  ['Diego', 'Rossi', '19', 'Verona'],
  ['Prisca', 'Verdi', '12', 'Roma'],
  ['Sami', 'Neri', '31', 'Bologna'],
]
const table = document.createElement('table')

const generateTable = function (nR, nD, lista) {
  for (let i = 0; i < nR; i++) {
    const tr = document.createElement('tr')
    for (let j = 0; j < nD; j++) {
      const td = document.createElement('td')
      td.innerText = lista[i][j]
      tr.appendChild(td)
    }
    table.appendChild(tr)
  }
}

area.appendChild(table)
console.log(area)
generateTable(5, 4, info)

/* ESERCIZIO 12
       Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
    */

const addRow = function () {}

/* ESERCIZIO 14
      Crea una funzione che nasconda le immagini della tabella quando eseguita
    */

const hideAllImages = function () {}

/* EXTRA ESERCIZIO 15
      Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
    */

const changeColorWithRandom = function () {}
