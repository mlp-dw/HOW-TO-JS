document.getElementById("submit").addEventListener("click", () =>{
    let nom = document.getElementById("lastname").value;
    let prenom = document.getElementById("firstname").value;
    let ville = document.getElementById("city").value;
    console.log(nom);
    alert(nom + "\n" + prenom + "\n" + ville)
})
