// Demander à l’utilisateur de saisir son âge. S’il a plus de 18 ans, afficher " Vous êtes majeur ". 
// Sinon afficher " Vous êtes mineur ".


document.getElementById("submit").addEventListener("click", () =>{
    let reponse = Number(document.getElementById("age").value);
    if( reponse < 18 ){
        alert("Vous êtes mineur.");
    } 
    else {
        alert("Vous êtes majeur.");
    }
})


