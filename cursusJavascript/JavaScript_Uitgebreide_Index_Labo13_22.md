# Uitgebreide JavaScript Index – Web Development I (Labo 13 t.e.m. 22)

## Inleiding

Deze index is samengesteld op basis van:
- Labo 13: Introductie JavaScript, variabelen, functies, rekenmachine
- Labo 14: Arrays, dialogen, DOM-selectie, innerHTML
- Labo 15: Events, NodeLists, style, className, classList, textContent
- Labo 16: Formulieren
- Labo 17: Strings, sorteren, formwaarden
- Labo 18: DOM nodes, child elements, DOM manipulatie
- Labo 19: Timers, random getallen, games
- Labo 20: Date, objecten, object literals, JSON
- Labo 21: Cookies, sessionStorage, localStorage
- Labo 22: Integratieproject

---

# A

## addEventListener()

Koppelt een event aan een functie.

```javascript
button.addEventListener("click", klikHandler);
```

Gebruikt vanaf labo 15 en bijna elk volgend labo.

## alert()

Toont een melding.

```javascript
alert("Hallo");
```

---

# A

## Array

Een geordende verzameling waarden.

```javascript
const kleuren = ["rood", "groen", "blauw"];
```

Belangrijke methodes:

```javascript
push()
pop()
sort()
length
```

Labo 14 en 17.

---

# B

## Boolean

Datatype met twee mogelijke waarden.

```javascript
true
false
```

---

## break

Verlaat onmiddellijk een lus.

```javascript
for (let i = 0; i < 10; i++) {
    if (i === 5) break;
}
```

---

# C

## childNodes

Alle child nodes.

```javascript
element.childNodes
```

Labo 18.

## children

Alle child elementen.

```javascript
element.children
```

## classList

CSS-klassen beheren.

```javascript
element.classList.add("active");
element.classList.remove("active");
element.classList.toggle("active");
```

Labo 15.

## className

Volledige class-attribuut lezen of instellen.

```javascript
element.className = "warning";
```

## click event

```javascript
button.addEventListener("click", handler);
```

---

## confirm()

```javascript
const ok = confirm("Doorgaan?");
```

---

## console.log()

```javascript
console.log("Debug");
```

Essentieel voor debugging.

---

## const

Gebruik standaard const.

```javascript
const naam = "Jan";
```

---

# C

## Cookie

Kleine hoeveelheid data die de browser bewaart.

Labo 21.

---

# D

## Date

Datum- en tijdobject.

```javascript
const nu = new Date();
```

Belangrijke methodes:

```javascript
getDate()
getMonth()
getFullYear()
getHours()
```

Labo 20.

## document

Rootobject van de DOM.

```javascript
document.querySelector("h1");
```

## DOM

Document Object Model.

HTML wordt voorgesteld als een boomstructuur.

## do...while

```javascript
do {
    i++;
} while (i < 10);
```

---

# E

## Event

Gebeurtenis zoals:

- click
- load
- input
- change

## Event object

```javascript
function klik(event) {
}
```

## event.preventDefault()

```javascript
event.preventDefault();
```

Belangrijk bij formulieren.

---

# F

## for

```javascript
for (let i = 0; i < 10; i++) {
}
```

## for...of

Loopt over waarden.

```javascript
for (const item of lijst) {
}
```

## Function

```javascript
function som(a, b) {
    return a + b;
}
```

Arrowfunctie:

```javascript
const som = (a,b) => a+b;
```

---

# G

## getAttribute()

```javascript
img.getAttribute("src");
```

## getElementById()

```javascript
document.getElementById("txtNaam");
```

## getElementsByClassName()

```javascript
document.getElementsByClassName("item");
```

## getElementsByName()

Labo 16 en 18.

```javascript
document.getElementsByName("geslacht");
```

## getElementsByTagName()

```javascript
document.getElementsByTagName("p");
```

---

# I

## if / else

```javascript
if (score >= 10) {
}
else {
}
```

## innerHTML

HTML lezen of aanpassen.

```javascript
div.innerHTML = "<b>Hello</b>";
```

Labo 14 en 18.

## innerText

```javascript
div.innerText = "Hallo";
```

---

# J

## JSON

JavaScript Object Notation.

```javascript
{"naam":"Jan"}
```

Labo 20.

## JSON.parse()

```javascript
const obj = JSON.parse(json);
```

## JSON.stringify()

```javascript
const tekst = JSON.stringify(obj);
```

---

# L

## length

```javascript
array.length
string.length
```

## let

Gebruik wanneer de waarde verandert.

```javascript
let teller = 0;
```

## localStorage

Blijvende opslag.

```javascript
localStorage.setItem("naam","Jan");
```

```javascript
localStorage.getItem("naam");
```

Labo 21.

---

# M

## Math.floor()

```javascript
Math.floor(3.9);
```

## Math.random()

```javascript
Math.random();
```

Gebruikt in labo 19.

---

# N

## Node

Een DOM-node.

## NodeList

Resultaat van querySelectorAll().

```javascript
const nodes = document.querySelectorAll("p");
```

## null

```javascript
let naam = null;
```

## Number

Numerieke datatype.

---

# O

## Object

```javascript
const persoon = {
    naam: "Jan",
    leeftijd: 20
};
```

## Object literal

Zelf objecten definiëren.

Belangrijk in labo 20.

---

# P

## parseFloat()

```javascript
parseFloat("12.5");
```

## parseInt()

```javascript
parseInt("12");
```

## prompt()

```javascript
const naam = prompt("Naam?");
```

---

# Q

## querySelector()

```javascript
document.querySelector("#titel");
```

## querySelectorAll()

```javascript
document.querySelectorAll(".item");
```

Zeer belangrijk.

---

# R

## return

```javascript
return resultaat;
```

---

# S

## sessionStorage

Data zolang browser-tab open is.

```javascript
sessionStorage.setItem("naam","Jan");
```

## setInterval()

```javascript
setInterval(update, 1000);
```

Labo 19.

## setTimeout()

```javascript
setTimeout(update, 1000);
```

## slice()

```javascript
tekst.slice(0,5);
```

## sort()

```javascript
gemeenten.sort();
```

Labo 17.

## split()

```javascript
tekst.split(",");
```

Labo 17.

## String

Tekstdatatype.

## style

Inline CSS aanpassen.

```javascript
element.style.color = "red";
```

Labo 15.

---

# T

## textContent

```javascript
element.textContent = "Hallo";
```

## toLowerCase()

```javascript
tekst.toLowerCase();
```

## toUpperCase()

```javascript
tekst.toUpperCase();
```

## trim()

```javascript
tekst.trim();
```

Labo 17.

---

# U

## undefined

```javascript
let x;
```

---

# V

## var

Historische declaratie.

Niet gebruiken.

```javascript
var x = 5;
```

Gebruik liever:

```javascript
let
const
```

---

# W

## while

```javascript
while (voorwaarde) {
}
```

## window load event

```javascript
window.addEventListener("load", init);
```

Labo 15.

---

# Examenprioriteit

## Hoog

- const
- let
- functies
- arrays
- strings
- loops
- if/else
- querySelector
- querySelectorAll
- getElementById
- innerHTML
- textContent
- addEventListener
- classList
- formulieren
- Math.random
- Date
- objecten
- JSON
- localStorage
- sessionStorage

## Middel

- childNodes
- children
- cookies
- setTimeout
- setInterval

## Laag

- var
- getElementsByTagName
- getElementsByClassName

# Eindproject (Labo 22)

Voor het eindproject moet je vrijwel alle bovenstaande concepten kunnen combineren:
- DOM manipulatie
- events
- formulieren
- arrays
- objecten
- storage
- JSON
- styling via JavaScript
