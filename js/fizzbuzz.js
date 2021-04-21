function carbonate() {
    // Grab values given
    let begin = parseInt(document.getElementById("start").value);
    let final = parseInt(document.getElementById("end").value);
    let buzzing = parseInt(document.getElementById("buzzNum").value);
    let fizzing = parseInt(document.getElementById("fizzNum").value);
    let buzFiz = buzzing * fizzing;
    let numbers = rangeValues(begin, final);
    outputBuzz(numbers, buzzing, fizzing, buzFiz);
}

// Finds range of numbers
function rangeValues(begin, final) {
    let numberArray = [];
    for (let index = begin; index <= final; index++) {
        numberArray.push(index);
    }
    return numberArray;
}

// Import values to preformated table and identify params
function outputBuzz(numbers, buzzing, fizzing, buzFiz) {
    // Grap template
    const rowTemplate = document.getElementById("dataTemplate");
    // Put table where placed in index.html
    const resultsBody = document.getElementById("resultsBody");
    let colCount = rowTemplate.content.cloneNode(true).querySelectorAll("td").length;
    resultsBody.innerHTML = "";

    // i represents getting the rows
    for (let i = 0; i < numbers.length; i += colCount) {
        let dataRow = rowTemplate.content.cloneNode(true);
        // returns an array of columns td=columns 
        let cols = dataRow.querySelectorAll("td");

        // Column Content
        for (let colIndex = 0; colIndex < cols.length; colIndex++) {
            // determines what column index to work on
            let value = numbers[i + colIndex];

            if (value % buzFiz == 0) {
                cols[colIndex].classList.add("FizzBuzz");
                value = "FizzBuzz";
            } else if (value % fizzing == 0) {
                cols[colIndex].classList.add("Fizz");
                value = "Fizz";
            } else if (value % buzzing == 0) {
                cols[colIndex].classList.add("Buzz");
                value = "Buzz";
            }
            cols[colIndex].textContent = value;

            // cols[colIndex].textContent = value;
        }
        // Below takes the trs and tds and creates page
        // this is outside column loop but inside row loop
        resultsBody.appendChild(dataRow);
    }
}