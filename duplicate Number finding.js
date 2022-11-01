//duplicate Number finding

const number = [1, 4, 5, 5, 6, 7, 6, 8, 9, 10, 4];

const duplicates = number.filter(function(value, index, array) {
	return array.indexOf(value) !== index;
});

console.log(duplicates);