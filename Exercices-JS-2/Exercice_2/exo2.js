// Dans le fichier HTML fourni, afficher une boite de dialogue avec le message : 
// "Merci de votre participation" quand le champ de saisie perd le focus.

document.getElementById("lastname").addEventListener("focusout", () =>{
    alert("Merci de votre participation");
})
