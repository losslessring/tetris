export default class Field {
    constructor(rows = 10, cols = 10){
		this.rows = rows;
        this.cols = cols;
        this.cells = Array(rows * cols).fill(0)
        this.projectedFigure = this.cells
        
        this.leftBoundary = this.createBoundary(0, (i, index, cols) => (i * cols) + index, cols, rows)
        this.rightBoundary = this.createBoundary(cols - 1, (i, index, cols) => (i * cols) + index , cols, rows)
        this.bottomBoundary = this.createBoundary(cols, (i, index, cols) => (rows * cols) - i - 1 , cols, cols).reverse()
        //console.log(cols)
        console.log(this.leftBoundary)
        console.log(this.rightBoundary)
        console.log(this.bottomBoundary)
	}

	//Граничная клетка это клетка с индексами по краям
	createBoundary(index, expression, cols, rows){
		let result = []
		for(let i = 0; i < rows; i++){
			result[i] = expression(i, index, cols)
		}
		return result

	}



	checkBoundary(position, boundary){
		//console.log(boundary)
		return boundary.some(boundaryIndex => boundaryIndex == position)
	}

	snapshot(array) {

		this.cells = array
		//console.log(this.cells)
	}
	checkCell(figure, scan_increment,value) {

	}

	// Проверка массива стакана на полный ряд
	checkRow(value){
		let counter = 0
		for ( let i = 0; i < this.rows; i++){
			for ( let j = 0; j < this.cols; j++){
				if (this.cells[i * this.cols + j] == value){
					counter = counter + 1
				}
			}
			if (counter == this.cols){
				console.log("полный ряд " + i)
				return i
			}
			counter = 0
		}
		return null
	}
	deleteRow(row) {
			if (row === null){
				return
			}
			for ( let j = 0; j < this.cols; j++){
				console.log(row * this.cols)
				this.cells[row * this.cols + j] = 0
			}
			this.shift(row)
				
	}
	//Сдвигает кубики при убирании ряда - разрезает стакан на 2 части - начало + убранный ряд
	// и остаток внизу. Надо сдвинуть кубики ДО убираемого ряда - поэтому сдвигаем в начальном
	// куске, потом склеиваем куски.
	shift(row){
			let first = this.cells.slice(0, row * this.cols + this.cols)
			//console.log(first)
			let end = this.cells.slice(row * this.cols + this.cols, this.rows * this.cols)
			//console.log(end)

			for ( let i = 0; i <  this.cols; i++){
				//console.log(i)
				first.pop()
				first.unshift(0)
			}
			this.cells = first.concat(end)
	}

}

