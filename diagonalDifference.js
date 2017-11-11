function main() {
    var n = parseInt(readLine());
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
   	}
   	// instantiate firstDiagonal counter, secondDiagonal counter
   	// iterate through numbers up to n dimension counter
   		// firstDiagonal += a[i][i]
   		// secondDiagonal += a[i][n-[i+1]]
   	// check if firstDiagonal larger
   		// console.log difference
   	// check if secondDiagonal larger
   		// console.log difference
   	
   	var firstDiagonal=0, secondDiagonal=0;
   	for(var i=0;i<n;i++){
   		firstDiagonal += a[i][i];
   		secondDiagonal +=a[i][n-[i+1]];
   	}
   	if(firstDiagonal>secondDiagonal){
   		console.log(firstDiagonal - secondDiagonal);
   	}else{
   		console.log(secondDiagonal - firstDiagonal);
   	}
}