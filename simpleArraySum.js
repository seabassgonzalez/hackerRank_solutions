
function simpleArraySum(n, ar) {
    // Complete this function
    // create sum counter instantiated at 0
    // loop through the array
        // increment counter by array item
    // return sum counter
    var sumCounter = 0;
    for(var i=0; i<ar.length;i++){
        sumCounter+=ar[i];
    }
    return sumCounter;
}
