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


}

