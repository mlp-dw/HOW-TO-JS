// =======================================================================================
// =============================QUADRILLAGE COLORE========================================
// =======================================================================================


let items = document.querySelectorAll(".item");

console.log(items);
items.forEach(function (item){
    item.addEventListener('click', (event) =>{
        event.target.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
    })
})

// METHODE 2==================================================
// for (let index = 0; index < items.length; index++) {
//  items[index].addEventListener('click', (event) =>{
//      event.target.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
//  })
// }






// =======================================================================================
// ===================================MODALE CACHE========================================
// =======================================================================================

let dino = document.querySelector(".lvl2");
let btn = document.getElementById("btn");
let body = document.querySelector(".body");



btn.addEventListener("click", function(){
    dino.style.visibility= "visible";
    body.style.backgroundColor="#3a3838";
   
})

body.addEventListener("click", function(event) {
    console.log("ça marche ?");
    dino.style.visibility= "hidden";
    body.style.backgroundColor="white";
  }, true);





// =======================================================================================
// ================================CONBINAISON GAGNANTE===================================
// =======================================================================================

let description = document.querySelector(".description")
let touch = 0

document.addEventListener('keydown', function(event){
    if (!event.repeat) {
       
   
    if (event.key === "y" || event.key === "o" || event.key === "x") {
        touch++
        console.log(touch);
    }
    if (touch === 2) {
        description.style.visibility = "visible";
    }else if (touch === 3) {
        description.style.color = "red";
    }
    }
})
document.addEventListener('keyup', function(event){

    if (event.key === "y" || event.key === "o" || event.key === "x") {
        touch--
        console.log(touch);
    }
    if (touch != 2) {
        description.style.visibility = "hidden";
        touch=0;
    }
    if (touch != 3) {
        description.style.color = "black";
        
    }
})




// =======================================================================================
// =====================================HOVER SIZE========================================
// =======================================================================================


let cases = document.querySelectorAll(".caz");


console.log(cases);
cases.forEach(function (caz){
    caz.style.transitionDuration = '1S'
    caz.addEventListener("mousedown", () =>{
        caz.style.filter = "blur(0px)";
        caz.style.border = "2px solid red";
        caz.style.width = "400px";
        caz.style.height = "200px";
    })
    caz.addEventListener("mouseup", () =>{
        caz.style.filter = "blur(6px)";
        caz.style.border = "2px solid black";
        caz.style.width = "200px";
        caz.style.height = "200px";
    })
    
})



// =======================================================================================
// =====================================CARROUSEL=========================================
// =======================================================================================

let btn2 = document.getElementById("btn2");
let carrousel = document.querySelector(".carrousel")
let avant = document.querySelector(".avant");
let apres = document.querySelector(".apres");
let images = [src="https://i.ytimg.com/vi/x6DB6fIj2J4/maxresdefault.jpg", scr="https://lutin-ludique.com/2962/carnosaure.jpg", 
scr="https://sites.google.com/site/luniverdesdinosaures/_/rsrc/1402993193617/le-xenotarsosaurus/Xenotarsosaurus.jpg",
src="https://img.myloview.fr/images/carnotaurus-700-80444710.jpg", src="https://image.shutterstock.com/image-illustration/3d-rendering-carnotaurus-sastrei-running-260nw-639348016.jpg",
scr="https://upload.wikimedia.org/wikipedia/commons/8/8a/Carnotaurus_2017.png", src="https://lh3.googleusercontent.com/proxy/QraGNAdMjdRXlleQaPD8qruHH_xMAVIaZFsWMUc696IJgcUPwO49T_25a9DdoKNcUN7HmgbMLcQ7U8m5NUX3WK8Z6KwoNuR9el-7yB_V3DxI",
]
let touch2 = 0

btn2.addEventListener("click", function(){
    carrousel.style.display= "block";
})

apres.addEventListener('click',function () {
    if (touch2 === images.length -1) {
        touch2 = 0;
    }else{
        touch2++   ;
    }
    carrousel.style.backgroundImage = "url(" +images[touch2] + ")";
    
})

avant.addEventListener('click',function () {
    if (touch2 === 0){
        touch2 = images.length -1 ;
    }else{
        touch2--   ;
    }
    carrousel.style.backgroundImage = "url(" +images[touch2] + ")";
})
