//
// This is only a SKELETON file for the 'FizzBuzz' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.


const fizzbuzz = function (nombre) {
//
// YOUR CODE GOES HERE
//
if (nombre % 5 == 0 && nombre % 3 == 0){
    return "fizzbuzz";
}
else if (nombre % 5 == 0){
    return "buzz";
}
else if (nombre % 3 == 0) {
    return "fizz";
}
else {return nombre;
}
}



console.log(fizzbuzz(2)) => 2
console.log(fizzbuzz(5)) => "buzz"
console.log(fizzbuzz(6)) => "fizz"
console.log(fizzbuzz(11)) => 11
console.log(fizzbuzz(30)) => "fizzbuzz"

// * afficher `"fizz"` si l'entier est un multiple de `3` (et n'est pas un multiple de `5`)
// * afficher `"buzz"` si l'entier est un multiple de `5` (et n'est pas un multiple de `3`)
// * afficher `"fizzbuzz"` si l'entier est un multiple de `3` et de `5`
// * afficher le `nombre` si l'entier n'est pas un multiple de `3` ou `5`

