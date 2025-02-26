//Deklaracija zasebnih varijabi
var i;
var sum;
// Deklaracija i inicijalizacija
var a = 5;
var b = 6;
var c = a + b;

var myString = "";
// prazan string
myString = "Lorem ipsum";
myString = "  Lorem ipsum"; // string sa prazninama na početk

//Operacija spajanja dva ili više stringova.
//U JavaScriptu se koristi operator +
var x = "Hello, " + "World";
var x = "Hello, " + 5;
var x =
  "Ovo je vrlo dugi string" +
  "koji je u dva reda " +
  "jer se inače ne može čitati.";

  //var x +=1;  // Unarani operator
  var x  = y + 1;         // Binarni operator    
 var x  = y ? y : x + 1;   // Ternarni operator 
 
  // If - else
  if (izraz) {
    // Izvrši kod u bloku #1
    } else {
    // Izvrši kod u bloku #2
    } ;
    // npr parnost broja
    let broj = 7; // Možeš promijeniti broj

if (broj % 2 === 0) {
    console.log("Broj je paran.");
} else {
    console.log("Broj je neparan.");
}
    // Jednostavan if
 if (izraz) {
    // Izvrši kod u bloku #1
    }
    //npr više godina od uvjeta, punoljetost
    let godine = 20; // Možeš promijeniti broj godina

if (godine >= 18) {
    console.log("Korisnik je punoljetan.");
}

     // If - else if
 if (izraz) {
    // Izvrši kod u bloku #1
    } else if (izraz2) {
    // Izvrši kod u bloku #2
    }
    // npr koliko je hladno
    let temperatura = 15; // Možeš promijeniti vrijednost

if (temperatura >= 30) {
    console.log("Vruće je vani!");
} else if (temperatura >= 20) {
    console.log("Vrijeme je ugodno.");
} else if (temperatura >= 10) {
    console.log("Malo je hladno.");
} else {
    console.log("Jako je hladno!");
}

   
    switch(n) {
        case 1: // Execute code block #1. break;
        case 2: // Execute code block #2. break;
        default: // Execute code block #3. break;
        }
        let dan = 3; // Možeš promijeniti broj
// koji je dan
switch (dan) {
    case 1:
        console.log("Ponedjeljak");
        break;
    case 2:
        console.log("Utorak");
        break;
    case 3:
        console.log("Srijeda");
        break;
    case 4:
        console.log("Četvrtak");
        break;
    case 5:
        console.log("Petak");
        break;
    case 6:
        console.log("Subota");
        break;
    case 7:
        console.log("Nedjelja");
        break;
    default:
        console.log("Pogrešan unos! Unesite broj od 1 do 7.");
}
// petlje
var count = 0;
while (count < 10) {
console.log(count);
count++; 
}
//npr ispis borjeva od 0 do 9
var count = 0;

while (count < 10) {
    console.log(count);
    count++; 
}
// do petlja
var count = 0;
do {
console.log(count);
count++; 
} while (count < 10);
// npr ispis parnih brojeva
var count = 0;

do {
    if (count % 2 === 0) {
        console.log(count); // Ispisuje samo parne brojeve
    }
    count++; 
} while (count <= 10);
// for petlja
for (var count = 0; count < 10; count++) {
    console.log(count);
    }
//npr ispis brojeva 1 do 10 s oznakom parnosti
for (var count = 1; count <= 10; count++) {
    if (count % 2 === 0) {
        console.log(count + " je paran broj");
    } else {
        console.log(count + " je neparan broj");
    }
}

   // For … in petlja se koristi sa objektnim tipovima podataka. 
    for (var i = 0; i < a.length; i++) {
     console.log(a[i]);
     }
     // npr 
     var osoba = {
        ime: "Marko",
        prezime: "Horvat",
        godine: 25
    };
    
    for (var kljuc in osoba) {
        console.log(kljuc + ": " + osoba[kljuc]);
    }
    //Izjave
 // continue
 for (i = 0; i < 10; i++) {
 if (i === 3) { continue; }
 text += "The number is " + i + "<br>";
 }
 // Preskakanje određenog broja
 for (var i = 0; i < 10; i++) {
    if (i === 3) {
        continue; // Preskače broj 3 i nastavlja dalje
    }
    console.log("Broj je " + i);
}
// break
 for (i = 0; i < 10; i++) {
 if (i === 3) { break; }
 text += "The number is " + i + "<br>";
 }
    //Prekid petlje kada se ispuni uvjet
    for (var i = 0; i < 10; i++) {
        if (i === 3) {
            break; // Zaustavlja petlju kada dođe do broja 3
        }
        console.log("Broj je " + i);
    }
//Niz (array)
var names = ['John', 'Jane', 'Mike'];
//provjera
console.log(names);
console.log(typeof(names));
//Multidimenzionalni nizovi
// Za stvaranje dvo-dimenzionalnih matrica, u JavaScriptu 
 //jednostavno koristimo niz nizova
var matrix = [[1, 2, 3], ['John', 'Jane', 'Mike']];
 matrix[0][1];
 matrix[2][2];
 matrix[0][4] = 5;
 matrix[1] = [];
 //Iteracije nad nizom
 //for, 
 var names = ['John', 'Jane',, 'Mike'];
 for (var i = 0; i < names.length; ++i) {
 console.log(names[i]);
 }
 //forEach
 names.forEach(function(value){
 console.log(value);
 });
 //Definicija i pozivanje funkcije
 //DEFINICIJA
 function imeFunkcije() {
 // nesto napravi
 }
 //POZIVANJE
 imeFunkcije()
 function imeFunkcije() {
    var value = 1;
    return value;
    } 
   console.log(imeFunkcije());
   // Što se ispisuje u 
   //konzoli u ova dva 
   function imeFunkcije() {
    var value = 1;
    return value;
    value += 1;
    } 
   console.log(imeFunkcije());
   //jednostavan primjer funkcije
   function saberi(a, b) {
    return a + b;
}

console.log(saberi(5, 3)); // Ispis: 8
console.log(saberi(10, 7)); // Ispis: 17

//objekt
var dog = {
    'Golden retriever':
    bark, function() {
    return 'Wuf Wuf';
    },
    };
// npr objekt + funkcija
let osoba = {
    ime: "Marko",
    prezime: "Jovanović",
    godine: 30,
    adresa: {
        ulica: "Glavna 12",
        grad: "Beograd",
        drzava: "Srbija"
    },
    pozdravi: function() {
        return `Zdravo, ja sam ${this.ime} ${this.prezime} i imam ${this.godine} godina.`;
    }
};

console.log(osoba.ime); // Ispis: Marko
console.log(osoba.adresa.grad); // Ispis: Beograd
console.log(osoba.pozdravi()); // Ispis: Zdravo, ja sam Marko Jovanović i imam 30 godina.


document.getElementById("footer");
document.getElementsByType("li");
document.getElementsByClassName("description");
 document.querySelector(".description");
 document.querySelectorAll(".description");
// Kreiranje i dodavanje elementa
  var f = document.querySelector("#footer");
  var d = document.createElement("div");
  f.appendChild(d);
  // micanje elemenata
  var f = 
document.querySelector("#footer");
 f.parentNode.removeChild(f);

 // innerhtml prikazuje sve(cijeli html element)
 var content = description.innerHTML;
 description.innerHTML = 'Ima <span>4 rijeke</span>';
// textcontent i innertext samo tekst
 var content = description.textContent;
 description.textContent = 'Ima 4 rijeke';
 description.innerText = 'Ima 4 rijeke';
 // mijenjanje atributa
 var image = 
document.querySelector("image");
 image.src = "ipsum.png";
 //Ne-HTML i data Atributi
 var image = 
document.querySelector("image");
 image.getAttribute("width");
 image.setAttribute("height") = 40;
 image.removeAttribute("height");
 var ul = document.querySelector("ul");
 ul.dataset.index = 2;
// inline  stilovi
document.getElementById(id).style.property = new style;
element.style.position = "relative";
// css stlye decoration
element.style.fontFamily = "Arial";
element.style.cssFloat = "left"
// Izračunati stilovi
var element = document.getElementById(id);
var styles = window.getComputedStyles(element, null);
var style = getPropertyValue(styles, "font-size");
//Mijenjanje CSS klasa
var element = document.getElementById(id);
element.className = "containerElement containerElement--left";
console.log(element.classList);
element.classList.add("hide");
element.classList.remove("hide");
// animiranje css
var elem = document.getElementById("cube");
var pos = 0;
var id = setInterval(frame, 10);
function frame() {
pos++;
elem.style.left = pos + 'px';
}
//addEventListener()
// inline
//<input type="button" onblur="blur();" value="Click" />
// kao svojstvo na elementu
//<input type="button" value="Click" />
var button = document.querySelector("button");
button.onblur = function() {
}
//  addEventListener metoda
//<input type="button" value="Click" />
var button = document.querySelector("button");
function handleBlur() {  }
button.addEventListener("blur", handleBlur);
button.removeEventListener("blur", handleBlur);
// Handler funkcija
function handleBlur(event) {
    var target = event.target;
    if (target == element) {
    event.preventDefault();
    event.stopPropagation();
    }
    return false;
    }
// fetch
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())  
    .then(data => console.log(data))  
    .catch(error => console.error('Error:', error));

