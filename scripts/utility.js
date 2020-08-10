
const getRandomInt = (min, max) =>{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



const projectArrayToArray = (array_field, array_object, position = 0) =>{
//Что должна возвращать эта функция при выходе за границы массива?
//Exception? или  загонять массив в конец? Или null?
	// console.log(position)
	// console.log(array_object.length)
	// console.log(position + array_object.length)
	// console.log(array_field.length)
	let result = array_field.map(element => element)
	
	if (position + array_object.length > array_field.length){			
		
		throw new Error('Out of array range')
		
		//position = array_field.length - array_object.length
	}
	
	for (let k = 0; k < array_object.length; k++){				
		result[position+k] = array_object[k]
	}

	return result
}



const coordsToArrayIndex = (x, y, xsize) => {
	return y * xsize + x
}


const fall = (array_field, array_object, start, increment, steps) => {

				let timerId = setInterval(() => {
						let result = projectArrayToArray(array_field, array_object, start)
						start = start + increment
						console.log(result)
						
						if (start >= steps){
							clearInterval(timerId)
						}
					}, 500)

				
		}

export {getRandomInt, projectArrayToArray, coordsToArrayIndex, fall}