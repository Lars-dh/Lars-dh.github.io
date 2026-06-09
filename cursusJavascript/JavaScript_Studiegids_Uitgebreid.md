# JavaScript Studiegids – Web Development I (Uitgebreide Versie)

## Toegevoegde hoofdstukken

# In welke labo's komt elk onderwerp voor?

| Onderwerp | Labo |
|------------|------|
| Variabelen (const, let) | 13-22 |
| Functies | 13-22 |
| Arrays | 14, 17, 22 |
| Strings | 17, 22 |
| DOM-selectie | 14-22 |
| querySelector | 14-22 |
| querySelectorAll | 15-22 |
| innerHTML | 14, 18, 22 |
| textContent | 15, 18, 22 |
| classList | 15, 18, 22 |
| Events | 15-22 |
| Formulieren | 16, 17, 22 |
| sort() | 17 |
| split() | 17 |
| DOM Nodes | 18 |
| childNodes | 18 |
| children | 18 |
| setTimeout | 19 |
| setInterval | 19 |
| Math.random | 19 |
| Date | 20 |
| Objecten | 20 |
| JSON | 20 |
| Cookies | 21 |
| sessionStorage | 21 |
| localStorage | 21 |
| Eindproject | 22 |

---

# Welke loop gebruik ik wanneer?

## for

Gebruik wanneer je een teller nodig hebt.

```javascript
for (let i = 0; i < lijst.length; i++) {
    console.log(lijst[i]);
}
```

Typische toepassingen:
- index nodig
- skippen met continue
- stoppen met break

---

## for...of

Gebruik wanneer je enkel de waarden nodig hebt.

```javascript
for (const naam of namen) {
    console.log(naam);
}
```

Beste keuze voor arrays.

---

## while

Gebruik wanneer je niet weet hoeveel iteraties nodig zijn.

```javascript
while (saldo > 0) {
    saldo--;
}
```

---

## do...while

Gebruik wanneer de code minstens één keer moet draaien.

```javascript
do {
    keuze = prompt("Kies");
}
while (keuze === "");
```

---

## forEach

Niet expliciet in de cursus maar nuttig.

```javascript
namen.forEach(naam => console.log(naam));
```

Geen break of continue mogelijk.

---

# const vs let vs var

## const

Standaardkeuze.

```javascript
const naam = "Jan";
```

Voordelen:
- veiliger
- voorkomt accidentele hertoewijzingen

Gebruik altijd tenzij de waarde moet veranderen.

---

## let

Wanneer de waarde verandert.

```javascript
let teller = 0;
teller++;
```

Gebruik voor:
- tellers
- tijdelijke waarden
- loopvariabelen

---

## var

Oude JavaScript.

```javascript
var x = 10;
```

Niet gebruiken.

Problemen:
- function scope
- hoisting
- moeilijkere debugging

Examenvraag:
"Wanneer gebruik je const en wanneer let?"

Antwoord:
- const standaard
- let wanneer hertoewijzing nodig is

---

# DOM Cheat Sheet

## Element selecteren

```javascript
document.getElementById("id");
document.querySelector("#id");
document.querySelector(".klasse");
document.querySelectorAll(".klasse");
```

---

## Inhoud lezen

```javascript
element.textContent
element.innerText
element.innerHTML
```

---

## Inhoud wijzigen

```javascript
element.textContent = "Hallo";
element.innerHTML = "<b>Hallo</b>";
```

---

## CSS aanpassen

```javascript
element.style.color = "red";
element.style.backgroundColor = "yellow";
```

---

## Klassen aanpassen

```javascript
element.className = "warning";

element.classList.add("warning");
element.classList.remove("warning");
element.classList.toggle("warning");
```

---

## Attributen lezen

```javascript
img.getAttribute("src");
```

---

## Kind-elementen

```javascript
element.children
element.childNodes
```

---

## Event koppelen

```javascript
button.addEventListener("click", klik);
```

---

## Formulier stoppen

```javascript
event.preventDefault();
```

---

# Storage Cheat Sheet

## localStorage

Blijft bewaard na afsluiten browser.

Opslaan:

```javascript
localStorage.setItem("naam", "Jan");
```

Lezen:

```javascript
localStorage.getItem("naam");
```

Verwijderen:

```javascript
localStorage.removeItem("naam");
```

Alles verwijderen:

```javascript
localStorage.clear();
```

---

## sessionStorage

Bestaat zolang tab open blijft.

Opslaan:

```javascript
sessionStorage.setItem("naam", "Jan");
```

Lezen:

```javascript
sessionStorage.getItem("naam");
```

Verwijderen:

```javascript
sessionStorage.removeItem("naam");
```

---

## Cookies

Schrijven:

```javascript
document.cookie = "naam=Jan";
```

Lezen:

```javascript
console.log(document.cookie);
```

---

# Meest voorkomende examenvragen

## DOM

- verschil tussen querySelector en querySelectorAll
- verschil tussen innerHTML en textContent
- verschil tussen className en classList

## Variabelen

- const vs let
- waarom var vermijden

## Loops

- verschil tussen for en while
- wanneer for...of gebruiken

## Storage

- localStorage vs sessionStorage
- JSON.parse vs JSON.stringify

## Strings

- trim()
- split()
- toLowerCase()
- toUpperCase()

## Arrays

- sort()
- length
- itereren met for of for...of

# Samenvatting

Voor labo 22 (eindproject) moet je comfortabel zijn met:

1. const en let
2. functies
3. arrays
4. strings
5. if/else
6. loops
7. DOM-selectie
8. events
9. formulieren
10. style en classList
11. Date
12. JSON
13. localStorage
14. sessionStorage
