/**
*Define if a number is divisible by 3 or 5 or both.
*@param {number} index A number to verify is divisibility.
*@return {string} "Fizz" if divisible by 3, "Buzz" if divisible by 5 , "FizzBuss" if divisible by 3 and 5 or else return index.
**/
function findFizzBuzz (index) {
	
	/** @type {string} */
	let result = "";
	
	if (index === 0) {
		return i;
	}
	
	//divisible by 3 and 5 is equivalent to be divisible by 15
	if (index % 15 === 0) {
		result = "FizzBuzz";
	} else if (index % 3 === 0) {
		result = "Fizz";
	} else if (index % 5 === 0) {
		result = "Buzz";
	} else {
		result = index.toString();
	}
	return result;
}

for (var i = 0; i <= 100; i++) {
    console.log(findFizzBuzz(i));

}