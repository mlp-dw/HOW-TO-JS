let reponse = prompt("Bonjour ! ", "<entre ton prénom>")

if( reponse == null ){
    alert("Vous avez cliqué sur Annuler");
} 
else {
    alert("Bonjour " + reponse + ", ça roule ?");
}