function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);

    // instantiate positive, negative, and zeroes counters
    // loop through the array
    	// if array item > 0
    		// increment positive
    	// if array item < 0
    		// increment negative
    	// if array item == 0
    		// increment zeroes
    // console.log positive / n
    // console.log negative / n
    // console.log zeroes / n 
    var pos=0, neg=0, zero=0;
    for(var i=0; i<n; i++){
        if(arr[i]>0){
            pos++;
        }
        if(arr[i]<0){
            neg++;
        }
        if(arr[i]==0){
            zero++;
        }
    }
    console.log(pos/n);
    console.log(neg/n);
    console.log(zero/n);
}