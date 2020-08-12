export default class Field {
    constructor(rows = 10, cols = 10){
		this.rows = rows;
        this.cols = cols;
        this.cells = Array(rows * cols).fill('0')
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
		return boundary.some(boundaryIndex => boundaryIndex == position);
	}

	snapshot(array) {

		this.cells = array
		//console.log(this.cells)
	}
	checkCell(figure, scan_increment,value) {

	}


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
			for ( let i = 0; i < this.cols; i++){
				this.projectedFigure.pop()
				this.projectedFigure.unshift(0)
				//this.projectedFigure.push(0)
			}
		
	}
	shift(){

	}

}

