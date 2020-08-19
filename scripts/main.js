import Field from './field.js'
import Figure from './figure.js'
import DisplayField from './display.js'
import {getRandomInt, 
		projectArrayToArray, 
		coordsToArrayIndex, 
		checkCells, 		
		checkCellsIndices,
		} from './utility.js'


const rows = 20
const cols = 10

let field = new Field(rows, cols)
console.log(field)


let figure = new Figure(rows, cols, 0)
console.log(figure)

let display_field = new DisplayField(document.getElementById("container"), 
	field.rows, field.cols, field.cells, 0)

console.log(projectArrayToArray(field.cells, figure.shape, 0))



const mainCycle = (position, increment, boundary) => {
	document.onkeydown = function(e){
        
        if (e.repeat) { return }
        
        switch(e.keyCode){

        	case 32:                
                console.log('space')
                clearInterval(timerId)
                break
            case 37:

                console.log('left')

                //Проверка на границу стакана и на наличие кирпичей рядом
                if (!field.checkBoundary(position, field.leftBoundary) &&
                	!checkCells(field.cells, figure.shape, position, -1, 1, 1)){
					position = position - 1
                }


                
                break
            case 38:



                //Переворот фигуры, проверка пересечения, если фигура после переворота
                //пересекает уже лежащие фигуры, повернуть обратно
                figure.rotateRight()
                
                if(checkCells(field.cells, figure.shape, position, 0, 1, 1)){
                	figure.rotateRight()
                }

                //Переворот, проверка , cделать проверку по индексам для всего массива фигуры
                //если фигура пересекает обе границы, значит она вылезла
                //за пределы, переворачиваем обратно, потом исправить на rotateLeft
                if(checkCellsIndices(field.cells, figure.shape, position, 0, 1, field.rightBoundary) &&
                	checkCellsIndices(field.cells, figure.shape, position, 0, 1, field.leftBoundary)               	
                	){
                	figure.rotateRight()	
                }
                // Проверка, если фигура вызезла за дно, перевернуть обратно
                if(checkCellsIndices(field.cells, figure.shape, position, 0, 1, field.bottomBoundary)){
                	figure.rotateRight()	
                }
                

                break
            case 39:

            	console.log('right')
            	console.log("figure.xsize = " + figure.xsize)
            	 console.log(position + figure.xsize - 1)

                if (!field.checkBoundary(position + figure.xsize - 1 , field.rightBoundary) &&
                	!checkCells(field.cells, figure.shape, position, 1, 1, 1)){
					position = position + 1
                }

               
                break
            case 40:
            	// console.log(figure.ysize)
            	// console.log((position + figure.ysize + cols))
            	// console.log((rows * cols -1))
            	// console.log(!(position + figure.ysize - 1 + cols >= rows * cols - 1))
                console.log('down')
                //let prevPosition = position
                //if (!(position + figure.ysize  + cols > rows * cols - 1)){
				//	position = position + cols
                //}
                // if(position > rows * cols - 1){
                // 	position = prevPosition
                // }
                
                break
        }
    }
				


				let timerId = setInterval(() => {																														
						

						// try {
						//Проекция фигуры в стакан - проекция массива фигуры в массив стакана по позиции
							

							let result = projectArrayToArray(field.cells, figure.shape, position)
							//console.log(result)
							if (result !== undefined){
								field.projectedFigure = result
							}

						// } catch (e) {
						//   	console.error(e);
						// 	//clearInterval(timerId)


						// }

						//Проверка дна и лежащих снизу фигур, если фигура достигла дна,
						//или под ней лежит фигура
						//то делается снимок положения фигуры в стакане, и он сохраняется
						// как состояние стакана
						if (checkCells(field.cells, figure.shape, position, cols, 1, 1) ||
							checkCells(field.cells, figure.shape, position, cols, 1, undefined)) {
							field.snapshot(field.projectedFigure)							
							figure.generateRandomFigure()
							//figure.resetRotation()

							position = 5
						}

						field.deleteRow(field.checkRow(1))

					  	position = position + increment

						//console.log("position = " + position + " increment = " + increment + " boundary = " + boundary)
						//console.log(result)
						//console.log(position)
						display_field.update(field.projectedFigure)
						
						
					}, 300)

				
		}

mainCycle(5, cols, field.cells.length)

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
//Сделать поворот фигуры - добавлять нули в массив по количеству рядов

//Есть два массива - массив фигуры и массив стакана, один массив проецируется на другой, 
//делаются все проверки - на пересечение границ, на пересечение других фигур при повороте
// Фугура падает всего одна - просто, когда она достигает дна, делается "снимок" 
//массив описывющий фигура записывается в массив стакана, и фигура переставляется в начало.
//У стакана 2 массива - временный, куда проецируется с помощью самой главной функции projectArrayToArray
//массив фигуры, и постоянный, куда сохраняется состояние стакана после падения фигуры
