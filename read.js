const mySelf = {
	name: "Shahria Jaman Khan",
	birth: 1998,
	profession: "fullstack developer",
};
const myMap = (array, callback) => {
	let result = [];
	array.forEach((item) => {
		result.push(callback(item));
	});
	return result;
};
console.log(mySelf);
