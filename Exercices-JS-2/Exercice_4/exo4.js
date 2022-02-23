// Dans le fichier HTML fourni, faire que le bouton RAZ 
// efface les données des champs du formulaire.

document.getElementById("RAZ").addEventListener("click", () =>{
    let nom = document.getElementById("lastname").setAttribute('value',"");
    let prenom = document.getElementById("firstname").setAttribute('value',"");
    let ville = document.getElementById("city").setAttribute('value',"");
})