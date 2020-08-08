import Field from './field.js'
import {displayField} from './display.js'
import {getRandomInt} from './utility.js'


const rows = 10
const cols = 10

displayField(document.getElementById("container"), rows, cols)

// let timerId = setInterval(() => {

// 			document.getElementsByClassName('cell')[getRandomInt(0, rows * cols)].style.backgroundColor = "blue"
// 						}, 500)

// const fall = (cell, increment) => {

// 					setInterval(() => {
// 						document.getElementsByClassName('cell')[cell].style.backgroundColor = "blue"
// 						cell = cell + increment

// 						}, 500)
// 		}

// fall(1, 10)

// Генерация элемента - случайная позиция в верхнем ряду - от 0 до rows
// Сделать падение элемента - следующая клетка внизу - это номер начального элемента + количество рядов
//Как сделать это в цикле ? Как передавать следующее значение в интервал или цикл с задержкой ?
// Можно сделать через замыкание - сделать внешний счетчик и обернуть в функцию
//Да, все аргументы, переданные в функцию, попадают в ее внутренний объект с аргументами,
// и этот объект можно менять во внутренней функции
// Можно сделать через внешний счетчик по ссылке - сделать объект и менять его поле