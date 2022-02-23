// Dans le fichier HTML fourni, faire afficher ou masquer le texte en fonction de l'ancre.


let on = document.getElementById("on");
let off = document.getElementById("off");
let txt = document.getElementById("text");


on.addEventListener("click", () => {
    txt.style.display = "block";
})
off.addEventListener("click", () => {
    txt.style.display = "none";
})
