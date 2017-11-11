function solve(a0, a1, a2, b0, b1, b2){
    // instantiate bobScore, aliceScore equal to 0
    // if a0<b0
        // increment bobScore
    // if a0>b0
        // increment aliceScore
    // if a1<b1
        // increment bobScore
    // if a1>b1
        // increment aliceScore
    // if a2<b2
        // increment bobScore
    // if a2>b2
        // increment aliceScore
    // return 
        // aliceScore space bobScore string
    var aliceScore=0, bobScore=0;
    if(a0<b0){
        bobScore++;
    }
    if(a0>b0){
        aliceScore++;
    }
    if(a1<b1){
        bobScore++;
    }
    if(a1>b1){
        aliceScore++;
    }
    if(a2<b2){
        bobScore++;
    }
    if(a2>b2){
        aliceScore++;
    }
    console.log(aliceScore + " " + bobScore);
}