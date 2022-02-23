// Dans le fichier HTML fourni, mettre les bordures des inputs en rouge si 
// les mots de passe sont différents. Sinon les mettre en vert.



let btn = document.getElementById("button");
let mdp = document.getElementById("password");
let okMdp = document.getElementById("confirmPassword");
console.log(mdp);
console.log(okMdp);


btn.addEventListener("click", () =>{

    if (mdp.value === okMdp.value){
        mdp.style.border = "2px solid green";
        okMdp.style.border = "2px solid green"
    }


    else {
        mdp.style.border = "2px solid red";
        okMdp.style.border = "2px solid red";
    }
})




