function bubbleSort(items){
	var length = items.length //The size of n
	for(let i = 0; i<length; i++){//First loop, the total number of passes
		var sorted = true; //This is here because the items might already be sorted
		for(let j = 0; j< (length - 1); j++){//(length-1) because you never need to check the last element
			// Compare the current spot with the next spot
			if(items[j] > items[j+1]){
				sorted = false; //We had to switch 2 numbers. We don't know if the numbers are sorted anymore
				//Swap the numbers
				var temp = items[j];//temp var to stash the variables
				items[j] = items[j+1];//the left item is now set to the right item
				items[j+1] = temp//the right item is now equal to what the left item was
			}
		}
		if(sorted){
			break; //Stop the outer loop because we didn't swap anything on this pass
		}
	}
	console.log(items);
}

bubbleSort([1,2,3,4,5,6]);