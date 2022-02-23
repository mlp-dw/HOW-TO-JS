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
    
    
    
    console.log(fizzbuzz(2));
    console.log(fizzbuzz(5));
    console.log(fizzbuzz(6)); 
    console.log(fizzbuzz(11)); 
    console.log(fizzbuzz(30)); 
    console.log(fizzbuzz(15)); 