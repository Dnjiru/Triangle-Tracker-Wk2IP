var triangle = prompt("Enter your three sides of a triangle, space with a comma?");
triangle = triangle.replace(/ /g, '');
var shape = triangle.split(',');
shape.sort();

shape.forEach(function(item) {
	alert(item);
})