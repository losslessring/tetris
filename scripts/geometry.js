import Point from './point.js'
import Line from './line.js'


//let startPoint = new Point(0, 0, 0)
//let endPoint = new Point(1, 1, 1)

let line1 = new Line(new Point(0, 0, 0), new Point(100, 100, 0))
let line2 = new Line(new Point(0, 110, 0), new Point(150, 0, 0))
let line3 = new Line(new Point(50, 40, 0), new Point(50, 170, 0))

let geometry_objects = [line1, line2, line3]


export {geometry_objects}