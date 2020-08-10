export default class Figure {
    constructor(x, y, shape){
		this.active = true
		this.x = x
		this.y = y
		const shapes =  [
						 [1,1,1,1]
						]
		this.shape = shapes[shape]
	}

	move(direction){
		switch(direction){
                case 'right':
                    this.x++
                    break
                case 'left':
                    this.x--
                    break
                case 'up':
                    this.y--
                    break
                case 'down':
                    this.y++
                    break
            }
	}


}