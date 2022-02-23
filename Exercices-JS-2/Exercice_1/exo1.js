// Dans le fichier HTML fourni, changer l'image au survol de celle-ci par la deuxième.

document.getElementById("image1").addEventListener("mouseover", () =>{
    document.getElementById("image1").src="images/image1_2.jpg";
    })


document.getElementById("image1").addEventListener("mouseout", () =>{
    document.getElementById("image1").src="images/image1.jpg";
    })