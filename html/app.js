/**
*Array containing the last value when a Fizz or Buzz is triggered.
*	the first element of the array is "Fizz", "Buzz" or both, and the second the index.
*@type {[string, number]}
*/
var tabLastResult= [];

/** @type {HTMLElement} */
var leftList = document.getElementById('left-list')
console.log(leftList)

/** @type {HTMLElement} */
var rightList = document.getElementById('right-list')


/**
*Checks if there is an alteration between Fizz or Buzz, and store their index.
*@param {string} currentFizzBuzz represents the current result.
*@param {number} currentIndex represents the current treated index.
*/
function updateTab(currentFizzBuzz, currentIndex) {
	
	//checks if tabLastResult is empty
	if (tabLastResult.length === 0) {
		tabLastResult[0] = currentFizzBuzz;
		tabLastResult[1] = currentIndex;
		return ;
	}
	
	//create a li HTMLElement with value of alternative "Fizz" and "Buzz", then, insert this li element in an ul HTMLElement.
	if (tabLastResult[0] !== currentFizzBuzz) {
        let liRight = document.createElement('li');
        liRight.innerHTML = tabLastResult[1] + " / " + currentIndex;
        rightList.appendChild(liRight);

	}
	tabLastResult[0] = currentFizzBuzz;
	tabLastResult[1] = currentIndex;
}

/**
*Define if a number is divisible by 3 or 5 or both.
*@param {number} index A number to verify is divisibility.
*@return {string} "Fizz" if divisible by 3, "Buzz" if divisible by 5 , "FizzBuss" if divisible by 3 and 5 or else return index.
**/
function findFizzBuzz (index) {
	
	/** @type {string} */
	let result = "";
	
	/**
	* if index is divisible by 3 or 5, hasTriggered will be at true, and execute an update on tabLastResult.
	* @type {boolean} 
	*/
	let hasTriggered = false;
	
	if (index === 0) {
		return "0";
	}
	
	//divisible by both, 3 and 5, is equivalent to be divisible by 15
	if (index % 15 === 0) {
		result = "FizzBuzz";
		hasTriggered = true;
	} else if (index % 3 === 0) {
		result = "Fizz";
		hasTriggered = true;
	} else if (index % 5 === 0) {
		result = "Buzz";
		hasTriggered = true;
	} else {
		result = index.toString();
	}
	
	if (hasTriggered) {
	updateTab(result, index);
	}
	
	return result;
}

for (var i = 0; i <= 100; i++) {
	//create a li HTMLElement with value of findFizzBuzz, then, insert this li element in an ul HTMLElement.
    let liLeft = document.createElement('li');
    liLeft.innerHTML = findFizzBuzz(i);
    leftList.appendChild(liLeft);
}

