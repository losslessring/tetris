export default class Figure {
    constructor(x, y, shape){
		this.active = true
		this.x = x
		this.y = y
		this.shapes =  [
						 [1,1]
						 
						]
		this.shape = this.shapes[shape]
	}

	rotate(increment){
		this.shape = [1,0,0,0,0,0,0,0,0,0,1]
	}



}