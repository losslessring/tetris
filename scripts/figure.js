export default class Figure {
    constructor(field_rows, field_cols, rotation){
		this.active = true
		this.field_rows = field_rows
		this.field_cols = field_cols
		this.rotation = rotation
		this.shapeNumber = 0

		this.shapeDescription = [
									{
										name: "i",
										coords: [
													[{x:0, y:0},{x:1, y:0},{x:2, y:0},{x:3, y:0}],
													[{x:0, y:0},{x:0, y:1},{x:0, y:2},{x:0, y:3}]
												],
										xsize: [4, 1],
										ysize: [1, 4]
									},
									{
										name: "o",
										coords: [
													[{x:0, y:0},{x:1, y:0},{x:0, y:1},{x:1, y:1}]
													
												],
										xsize: [2],
										ysize: [2]
									},
									{
										name: "t",
										coords: [
													[{x:0, y:0},{x:1, y:0},{x:2, y:0},{x:1, y:1}],
													[{x:1, y:0},{x:1, y:1},{x:1, y:2},{x:0, y:1}],
													[{x:1, y:0},{x:0, y:1},{x:1, y:1},{x:2, y:1}],
													[{x:0, y:0},{x:0, y:1},{x:0, y:2},{x:1, y:1}]
													
												],
										xsize: [3,2,3,2],
										ysize: [2,3,2,3]
									},
									{
										name: "z",
										coords: [
													[{x:0, y:0},{x:1, y:0},{x:1, y:1},{x:2, y:1}],
													[{x:1, y:0},{x:0, y:1},{x:1, y:1},{x:0, y:2}]
													
													
												],
										xsize: [3,2],
										ysize: [2,3]
									},
									{
										name: "s",
										coords: [
													[{x:1, y:0},{x:2, y:0},{x:0, y:1},{x:1, y:1}],
													[{x:0, y:0},{x:0, y:1},{x:1, y:1},{x:1, y:2}]
													
													
												],
										xsize: [3,2],
										ysize: [2,3]
									},
									{
										name: "j",
										coords: [
													[{x:0, y:0},{x:0, y:1},{x:1, y:1},{x:2, y:1}],
													[{x:0, y:0},{x:1, y:0},{x:0, y:1},{x:0, y:2}],
													[{x:0, y:0},{x:1, y:0},{x:2, y:0},{x:2, y:1}],
													[{x:1, y:0},{x:1, y:1},{x:0, y:2},{x:1, y:2}]																										
												],
										xsize: [3,2,3,2],
										ysize: [2,3,2,3]
									},

								]
		// this.shapes = this.shapeDescription[0].coords.map((figure) => {
		// 		return this.calculateProjection(figure, field_rows, field_cols)
		// 	})
		this.generateRandomFigure()
		console.log(this.shapes)
		//this.rotateRecalc(this.rotation)
	}

	getRandomInt(min, max) {
    	//min = Math.ceil(min)
    	//max = Math.floor(max)
    	return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + min
	}

	generateRandomFigure(){
		//console.log(this.getRandomInt(0, this.shapeDescription.length - 1))

		this.shapeNumber = this.getRandomInt(0, this.shapeDescription.length - 1)
		//console.log(this.shapeDescription[this.shapeNumber].xsize)
		this.shapes = this.shapeDescription[this.shapeNumber].coords.map(
			(figure) => {
				return this.calculateProjection(figure, this.field_rows, this.field_cols)
			})
		this.resetRotation()
	}

	coordsToArrayIndex(x, y, xsize) {
		return y * xsize + x
	}
	//Пересчет массива координат фигуры в стакан
	calculateProjection(source_coords, target_table_rows, target_table_cols){

		let result = []
		for(let i = 0; i < source_coords.length; i++){
			let index = this.coordsToArrayIndex(source_coords[i].x, source_coords[i].y, target_table_cols)
			//console.log(result)
			result[index] = 1
		}
		return result
	}

	rotateRecalc(rotation){
		this.shape = this.shapes[rotation]
		this.xsize = this.shapeDescription[this.shapeNumber].xsize[rotation]
		this.ysize = this.shapeDescription[this.shapeNumber].ysize[rotation]

	}

	resetRotation() {
		this.rotation = 0
		//console.log("rotation = " + this.rotation)
		this.rotateRecalc(this.rotation)

	}
	rotateRight(){
		
		//console.log(this.rotation)
		this.rotation +=1

		if (this.rotation >= this.shapes.length){
			this.resetRotation()
		}
		//console.log(this.rotation)
		this.rotateRecalc(this.rotation)
	}

	rotateLeft(){
		

		this.rotation -=1

		if (this.rotation < 0){
			this.resetRotation()
		}
		this.rotateRecalc(this.rotation)
	}


}