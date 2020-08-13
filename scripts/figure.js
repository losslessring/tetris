export default class Figure {
    constructor(field_rows, field_cols, rotation){
		this.active = true
		this.field_rows = field_rows
		this.field_cols = field_cols
		this.rotation = rotation


		this.shapeDescription =  {
									name: "l",
									coords: [
												[{x:0, y:0},{x:1, y:0},{x:2, y:0}],
												[{x:0, y:0},{x:0, y:1},{x:0, y:2}]
											],
									xsize: [3, 1],
									ysize: [1, 3]
								}
		this.shapes = this.shapeDescription.coords.map((figure) => {
				return this.calculateProjection(figure, field_rows, field_cols)
			})

		this.xsize = this.shapeDescription.xsize[this.rotation]
		this.ysize = this.shapeDescription.ysize[this.rotation]

		this.shape = this.shapes[this.rotation]

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

	resetRotation() {
		this.rotation = 0
		this.shape = this.shapes[0]
		this.xsize = this.shapeDescription.xsize[this.rotation]
		this.ysize = this.shapeDescription.ysize[this.rotation]
	}
	rotateRight(){
		

		this.rotation +=1

		if (this.rotation >= this.shapes.length){
			this.resetRotation()
		}
		
		this.shape = this.shapes[this.rotation]
		this.xsize = this.shapeDescription.xsize[this.rotation]
		this.ysize = this.shapeDescription.ysize[this.rotation]
	}



}