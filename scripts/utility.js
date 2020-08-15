
const getRandomInt = (min, max) =>{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const projectFigureToField = (field, figure, position) => {

}

//Самая главная функция программы - выполняет проецирования массива фигуры
//в массив стакана
const projectArrayToArray = (array_field, array_object, position = 0, value = 1) =>{
	let result = array_field.map(element => element)
	
	//Если позиция больше границы массива, то не успевая выполниться, выкидывает исключение
	if (position + array_object.length > array_field.length){			
		
		//throw new Error('Out of array range')
		return undefined
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
					//console.log(position + i + scan_increment)
					return true
				}
			}
		}
		return false
}

const checkCellsAny = (field, figure, position, scan_increment, figure_value, check_value) => {
		
		for (let i = 0; i < figure.length; i++){
			if(figure[i] == figure_value){
				console.log(field[position + i + scan_increment])
				if(field[position + i + scan_increment] == check_value){
					console.log(position + i + scan_increment)
					return true
				}
			}
		}
		return false
}


// Сделать проверку по индексам для всего массива фигуры и массива краев. 
// Если хоть где то пересекает, возвращаем true
const checkCellsIndices = (field, figure, position, scan_increment, figure_value, check_values) => {
		
		for (let i = 0; i < figure.length; i++){			
			if(figure[i] == figure_value){
				//console.log(position + i + scan_increment)
				if(check_values.some(boundaryIndex => boundaryIndex == position + i + scan_increment)){
					return true
				}
				
			}
		}
		return false
}

const checkCellsCommon = (field, figure, position, scan_increment, figure_value, check_values, operation) => {
		for (let i = 0; i < figure.length; i++){
			if(figure[i] == figure_value){
				//console.log(position + i + scan_increment)
				if((operation(check_values))){
					return true
				}

				//return check_values.some(boundaryIndex => boundaryIndex == position + i + scan_increment)
				
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

export {getRandomInt, 
		projectArrayToArray, 
		coordsToArrayIndex, 
		checkCells, 
		checkCellsIndices, 
		}