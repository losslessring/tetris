

export default class DisplayField {

    constructor (container, rows, cols, cells) {
        
        //Generate grid field based on rows and columns
        container.style.setProperty('--grid-rows', rows);
        container.style.setProperty('--grid-cols', cols);
        for (let c = 0; c < (rows * cols); c++) {
            let cell = document.createElement("div");
            cell.innerText = (c);
            container.appendChild(cell).className = "cell";
        }
        
        this.cells = document.getElementsByClassName('cell')

    }
    // Update colors based on array values
    // Not very good that array is coming from outside, could cause errors.
    update(array){
        if (array.length == this.cells.length){
            for (let i = 0; i < array.length; i++) {
                //document.getElementsByClassName('cell')[c].style.backgroundColor = "blue"
                if(array[i] == 1){
                    this.cells[i].style.backgroundColor = "blue"
                }
                else {
                    this.cells[i].style.backgroundColor = "white"   
                }
                //cell.innerText = (cells[c]);

            }
        }
    }

}
//export {displayField}
