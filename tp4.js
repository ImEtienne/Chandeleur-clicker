"use strict";
const img = document.createElement("img");
img.src = "crepe.png";

let elem = document.querySelector("h1");
elem.after(img);

document.body.querySelector("img").className = "c5";

let div = document.createElement("div");
div.id = "stats";
document.body.append(div);
div.className = "c3";

let div1 = document.createElement("div");
let contenu = document.createTextNode("Nombre de crepes :");
div1.append(contenu);
div1.className = "c1";

//Crêpes
let div2 = document.createElement("div");
div2.id = "compteur";
let cpt = 0;
let compteur = document.createElement("p1");
div2.append(compteur);
div2.className = "c1";
compteur.innerText = cpt;

div.append(div1);
div.append(div2);

/*img.addEventListener("click", incrementer);

function incrementer() {
  cpt++;
  compteur.innerText = cpt;
}*/

//Bigoudenes
let div_1 = document.createElement("div");
let contenuDiv_1 = document.createTextNode("Nombre de Bigoudenes :");
div_1.className = "c1";
div_1.append(contenuDiv_1);

let div_2 = document.createElement("div");
div_2.id = "bigoudenes";
let cpt_2 = 1;
let compteur_2 = document.createElement("p1");
div_2.className = "c1";
div_2.append(compteur_2);
compteur_2.innerText = cpt_2;

let button = document.createElement("input");
button.type = "button";
let salaire = 10;
button.value = salaire;
button.className = "c1";

div.append(div_1);
div.append(div_2);
div.append(button);

button.addEventListener("click", myfunc);

function myfunc() {
  if (cpt < button.value) {
    alert("pas assez de crepes");
  } else {
    cpt -= button.value;
    cpt_2++;
    compteur.innerText = cpt;
    compteur_2.innerText = cpt_2;
    button.value = cpt_2 * cpt_2 * 10;
  }
}

img.addEventListener("click", incrementer);

function incrementer() {
  cpt += cpt_2;
  compteur.innerText = cpt;
}

//Question 5
// crêperies
let div_5 = document.createElement("div");
let contenu5 = document.createTextNode("Nombre de creperies :");
div_5.className = "c1";
div_5.append(contenu5);

let div_6 = document.createElement("div");
div_6.id = "creperies";
let cpt_6 = 0;
let compteur_6 = document.createElement("p1");
div_6.className = "c1";
div_6.append(compteur_6);
compteur_6.innerText = cpt_6;

let button5 = document.createElement("input");
button5.type = "button";
button5.value = "construire";
button5.className = "c1";

div.append(div_5);
div.append(div_6);
div.append(button5);

button5.addEventListener("click", myfunc2);

function myfunc2() {
  if (cpt_2 > 2) {
    cpt_2 = cpt_2 - 3;
    compteur_2.innerText = cpt_2;
    cpt_6 = cpt + 3;
    compteur_6.innerText = cpt_6;
  } else {
    alert("pas assez de bigou bigou");
  }
}
