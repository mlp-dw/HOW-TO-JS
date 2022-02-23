// Dans le fichier HTML fourni, changer la couleur du texte en fonction du bouton choisi.

let r = document.getElementById("red");
let v = document.getElementById("green");
let b = document.getElementById("blue");
let txt = document.getElementById("text")


r.addEventListener("click", () => {
    txt.style.color= "#FF0000";
})

v.addEventListener("click", () => {
    txt.style.color="#00FF00";
})

b.addEventListener("click", () => {
    txt.style.color="#0000FF";
})

