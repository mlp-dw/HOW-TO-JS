// Dans le fichier HTML fourni, faire comme dans l'exercice 5 mais remettre 
// l'image d'origine dès que la souris ne survol plus l'image.
// Bonus Ne faire que deux fonctions JavaScript pour cet exercice.

document.getElementById("image1").addEventListener("mouseover", () =>{
    document.getElementById("image1").src="images/image1_2.jpg";
    })
document.getElementById("image1").addEventListener("mouseout", () =>{
    document.getElementById("image1").src="images/image1.jpg";
    })


document.getElementById("image2").addEventListener("mouseover", () =>{
        document.getElementById("image2").src="images/image2_2.jpg";
        })
document.getElementById("image2").addEventListener("mouseout", () =>{
        document.getElementById("image2").src="images/image2.jpg";
        })


document.getElementById("image3").addEventListener("mouseover", () =>{
        document.getElementById("image3").src="images/image3_2.jpg";
            })
document.getElementById("image3").addEventListener("mouseout", () =>{
        document.getElementById("image3").src="images/image3.jpg";
            })

document.getElementById("image4").addEventListener("mouseover", () =>{
    document.getElementById("image4").src="images/image4_2.jpg";
                })
document.getElementById("image4").addEventListener("mouseout", () =>{
    document.getElementById("image4").src="images/image4.jpg";
                })


document.getElementById("image5").addEventListener("mouseover", () =>{
        document.getElementById("image5").src="images/image5_2.jpg";
                    })
document.getElementById("image5").addEventListener("mouseout", () =>{
        document.getElementById("image5").src="images/image5.jpg";
                    })