// Dans le fichier HTML fourni, afficher une boite de dialogue avec la valeur du 
// champ dès que l'on appuie sur le clavier.

document.getElementById("lastname").addEventListener("keypress", () =>{
    alert(document.getElementById("lastname").value);
})
