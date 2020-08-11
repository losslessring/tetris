import Field from './field.js'
import Figure from './figure.js'
import DisplayField from './display.js'
import {getRandomInt, projectArrayToArray, coordsToArrayIndex, fall} from './utility.js'


const rows = 10
const cols = 10

let field = new Field(rows, cols)
console.log(field)


let figure = new Figure(3, 0, 0)
console.log(figure)

let display_field = new DisplayField(document.getElementById("container"), 
	field.rows, field.cols, field.cells, 0)

console.log(projectArrayToArray(field.cells, figure.shape, 0))

//fall(field.cells, figure.shape, 0, 1, 10)

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

const mainCycle = (array_field, array_object, position, increment, boundary) => {
				document.onkeydown = function(e){
        
        
        switch(e.keyCode){
            case 37:
                //snake.course = 'left'
                console.log('left')
                position = position - 1
                break
            case 38:
                //snake.course = 'up'
                break
            case 39:
                //snake.course = 'right'
                console.log('right')
                position = position + 1
                break
            case 40:
                //snake.course = 'down'
                break
        }
    }
				


				let timerId = setInterval(() => {																														
						

						try {

							var result = projectArrayToArray(array_field, array_object, position)

						} catch (e) {
						  	console.error(e);
							clearInterval(timerId)

						}


						position = position + increment

						if (position >= boundary){
							//clearInterval(timerId)
							field.snapshot(result)	
							position = 5
					  	}

						//console.log("position = " + position + " increment = " + increment + " boundary = " + boundary)
						//console.log(result)
						console.log(field.cells)
						display_field.update(result)
						
						
					}, 500)

				
		}

mainCycle(field.cells, figure.shape, 5, cols, field.cells.length)

// Генерация элемента - случайная позиция в верхнем ряду - от 0 до rows
// Сделать падение элемента - следующая клетка внизу - это номер начального элемента + количество рядов
//Как сделать это в цикле ? Как передавать следующее значение в интервал или цикл с задержкой ?
// Можно сделать через замыкание - сделать внешний счетчик и обернуть в функцию
//Да, все аргументы, переданные в функцию, попадают в ее внутренний объект с аргументами,
// и этот объект можно менять во внутренней функции
// Можно сделать через внешний счетчик по ссылке - сделать объект и менять его поле
//Стираю изображение в старой ячейке, рисую в новой - меняю стили
//Если достиг последнего ряда - обрубаю таймер
//Как отображать фигуру на поле ?
//Процедура или класс, которая будет брать фигуру, брать поле, а поле это массив,
//и фигура это массив, и проецировать значения массива на поле
// А кто будет реализовывать логику падения, проверку на падение, генерацию следующей фигуры.
//Сделать айдишники для ячеек, чтобы апдейтить их
//Исправить падение фигуры, чтобы не перепрыгивала в конец
// Размер массива динамически увеличивается, и это ломает display.update
//Ошибка прекращает исполнение кода в функции, и проверку навыход за рамки массива следует делать
//до display.update, чтобы не отключалось условие выключения таймера
//Что возвращать из функции projectArrayToArray при выходы за границы массива? Exception? или  загонять
//Массив в конец? Или null?
