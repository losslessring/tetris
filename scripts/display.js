
    
const displayField = (container, rows, cols) => {
        
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.innerText = (c);
        container.appendChild(cell).className = "cell";
    }



        // for(let i = 0; i < field.rows * field.cols; i++){
        //     let div = document.createElement('div')
        //     div.classList.add("cell");
        //     let text = document.createTextNode(`${i}`)
        //     div.appendChild(text)  
        //     container.appendChild(div)
                                   
        // }
}

export {displayField}
