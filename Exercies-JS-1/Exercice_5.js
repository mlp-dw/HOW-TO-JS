document.getElementById("submit").addEventListener("click", () =>{
    let nb1 = Number(document.getElementById("firstNumber").value);
    let nb2 = Number(document.getElementById("secondNumber").value);
    alert(Math.floor(nb1) * nb2);
})

// Demander à l’utilisateur deux nombres à virgule. Ne garder que la partie entière du premier .
// Les multiplier et afficher le résultat dans une boîte de dialogue.
