var triangleSides = function () {
    var sideA = parseFloat(document.getElementById('sideA').value);
    var sideB = parseFloat(document.getElementById('sideB').value);
    var sideC = parseFloat(document.getElementById('sideC').value);

    var output = document.getElementById('output')

    if(isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
        output.textContent = "Nigga! You didn't enter numbers!";
    }
    
}