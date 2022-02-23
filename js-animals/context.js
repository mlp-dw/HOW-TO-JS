const lineTemplate = document.querySelector('#line-template').cloneNode(true);
const animalsContainer = document.querySelector('#app table tbody');

function init_animals_table(animals) {
    animalsContainer.innerHTML = "";
    animals.forEach(function(animal, i) {
        const animalLine = lineTemplate.cloneNode(true);
        let animalLineCells = animalLine.querySelectorAll('th');
        
        animalLineCells[0].textContent = animal;
        animalLineCells[1].textContent = i+1;
        
        animalsContainer.appendChild(animalLine);
    })
}

// function search_proxy() {
//     const searchText = document.querySelector('#searchInput').value;
    
//     if(typeof search === "function") {
//         /*global search*/  
//         let results = search(searchText);
//         if(typeof results === "string") {
//             results = [results];
//         }
//         init_animals_table(results);
//     }
//     else {
//         console.log("Error : search function is not defined")
//     }
// }
const input = document.querySelector("#searchInput")

input.addEventListener('input', (event)=>{
    console.log(event.target.value);
    let results  = search(event.target.value)
    if(typeof results === "string") {
        results = [results];
    }
    init_animals_table(results);
})

/*global animals*/  
init_animals_table(animals);