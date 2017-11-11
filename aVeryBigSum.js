function aVeryBigSum(n, ar) {
    // Complete this function
    // instantiate counter
    // loop through array
        // increment counter by each item
    // return counter
    var counter = 0;
    for(var i=0; i<ar.length;i++){
        counter+=ar[i];
    }
    return counter;
}