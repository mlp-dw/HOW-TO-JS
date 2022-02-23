// Dans le fichier HTML fourni, au survol de l'image ajouter une bordure de 3px rouge 
// et la retirer quand la souris ne la survol plus.

document.getElementById("image1").addEventListener("mouseover", () =>{
    document.getElementById("image1").style.border="10px solid red";
    })


document.getElementById("image1").addEventListener("mouseout", () =>{
    document.getElementById("image1").style.border="none";
    })