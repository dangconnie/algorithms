function quickSort(array){

	if(array.length === 0){//to break out
		return [];
	}

	//Start the left array(left of the wall)
	var left = [];
	//Init right array, right of the wall
	var right = [];
	//Pick the first number as an arbitrary pivot element
	var pivot = array[0];

	// Run through the array, and test the pivot(1st element) against each
	for (let i=1; i<array.length; i++){//start with i=1 b/c we're comparing against the pivot 
		if(array[i] < pivot){
			left.push(array[i]);
		}else{
			right.push(array[i]);
		}
	}
	return quickSort(left).concat(pivot, quickSort(right));//this is recursive because the function calls itself within
}
quickSort([1,6,8,4,3,10,2,5,9]);