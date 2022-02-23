////////// Insérez ici votre code  ///////////////////////

// 1/ Utiliser du code Javascript pour trier les animaux par ordre alphabétique décroissant

animals.sort()
animals.reverse()

// 2/ Utiliser du code Javascript pour supprimer du tableau tous les animaux dont la lettre commence par "e" ou "m"


animals = animals.filter((animal) => {
    if (animal[0] !== "m" && animal[0] !== "e"){
        return true;
    }
        return false;
    });
// animals.filter(function(animal){
//     if (animal[0] !== "m" && animal[0] !== "e"){
//         return "";
//     }
//     else {return animal;}
// })


// animals.forEach(function(animal){
//     if (animal[0] == "m" && animal[0] == "e"){
//         return "";
//     }
//     else {return animal;}
// })


// animals.slice(20, 3);


// function removeItemOnce(animals){
//     if (animals[0] == "m" && animals[0] == "e"){
//         return animals.slice(20, 3);
//     }
//     else {return animals;}
// }
    

// 3/ Utiliser du code Javascript pour supprimer du tableau tous les animaux qui ont consécutivement deux fois la lettre "L" dans leur nom. Par exemple "caterpillar" et "spoonbill"



animals = animals.filter((animal) => {
    if (animal.includes("ll")){
        return false;
    }
    return true;
});


// 4/ Créer une fonction `search` qui prend en paramètre une chaîne de caractère à chercher et retourne un animal qui correspond
 
function search(searchText){
    return animals.filter((animal)=>(animal.startsWith(searchText)))
}


    

// animals = animals.forEach((animal) => {
//     let html = `<input type="text" id="searchInput" placeholder="Recherche">`;
//     animals.search((animal)  => {
//         html = html + `<input type="text" id="searchInput" placeholder="${animal}">`;
//     });
//     return html;
// });



// 5/ Améliorer la fonction search de façon à ce qu'elle retourne une correspondance avec plusieurs animaux. Par exemple si je cherche "guinea" la fonction search doit retourner `["guinea-fowl", "guinea-pig"]`.
 
    
///////////////////////////////////////////////