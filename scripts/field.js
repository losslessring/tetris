export default class Field {
    constructor(rows = 20, cols = 10){
		this.rows = rows;
        this.cols = cols;
        this.cells = Array(rows * cols).fill('0')

        
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
				console.log(this.cells[row * this.cols + j])
				this.cells[row * this.cols + j] = 0
			}
		
	}

}

