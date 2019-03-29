var triangleSides = function () {
    var sideA = parseFloat(document.getElementById('sideA').value);
    var sideB = parseFloat(document.getElementById('sideB').value);
    var sideC = parseFloat(document.getElementById('sideC').value);

    var output = document.getElementById('output')

    if(isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
        output.textContent = "Sorry, You didn't enter numbers as required!";
    } 
    else if (sideA === sideB && sideA === sideC ){
        output.textContent = "That's an Equilateral Triangle!";
    }
    else if (sideA > (sideB + sideC) || sideB > (sideA + sideC) || sideC > (sideA + sideB)) {
        output.textContent = "That is Not a Triangle!";
    }
    else if (sideA === sideB || sideB === sideC || sideC === sideA ) {
        output.textContent = "That's an Isosceles";
    }
    else {
        output.textContent = "That's a Scalane Triangle";
    }
    
}