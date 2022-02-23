document.getElementById("submit").addEventListener("click", () =>{
    let nb1 = Number(document.getElementById("firstNumber").value);
    let nb2 = Number(document.getElementById("secondNumber").value);
    alert(nb1 % nb2);
})

// Dans un fichier séparé, créer une fonction permettant d’afficher le reste de la division de deux nombres. 
// L’appeler depuis le fichier html.