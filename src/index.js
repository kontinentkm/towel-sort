module.exports = function towelSort (matrix) {
	if (!matrix) { return []}

	matrix.map((arr, i) => {
		if (i % 2 === 0) {
			return arr.sort((a, b) => a - b)
		} else return arr.sort((a, b) => b - a)
	})
	
	return matrix.flat(Infinity);
}
