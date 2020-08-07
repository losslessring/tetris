import Field from './field.js'
import {displayField} from './display.js'
import {getRandomInt} from './utility.js'


const rows = 10
const cols = 5

displayField(document.getElementById("container"), rows, cols)

// let timerId = setInterval(() => {

// 			document.getElementsByClassName('cell')[getRandomInt(0, rows * cols)].style.backgroundColor = "blue"
// 						}, 500)