
const getRandomInt = (min, max) =>{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const projectFigureToField = (field, figure, position) => {

}


const projectArrayToArray = (array_field, array_object, position = 0, value = 1) =>{
	let result = array_field.map(element => element)
	
	//Если позиция больше границы массива, то не успевая выполниться, выкидывает исключение
	if (position + array_object.length > array_field.length){			
		
		throw new Error('Out of array range')
		
		//position = array_field.length - array_object.length
	}
	
	for (let k = 0; k < array_object.length; k++){
		if (array_object[k] === value){
			result[position+k] = array_object[k]
		}
	}

	return result
}


//Ряды и строки в индекс массива по формуле array_index = y * размер таблицы по х + x
const coordsToArrayIndex = (x, y, xsize) => {
	return y * xsize + x
}


const checkCells = (field, figure, position, scan_increment, figure_value, check_value) => {
		for (let i = 0; i < figure.length; i++){
			if(figure[i] == figure_value){
				if(field[position + i + scan_increment] == check_value){
					return true
				}
			}
		}
		return false
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

export {getRandomInt, projectArrayToArray, coordsToArrayIndex, checkCells}