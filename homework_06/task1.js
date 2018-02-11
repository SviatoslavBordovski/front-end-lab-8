var sides = [];
var triangleType;

var PerH = (sides[0] + sides[1] + sides[2]) / 2;
var square = Math.sqrt(PerH * (PerH - sides[0]) * (PerH - sides[1]) * (PerH - sides[2]));

for (var i = 1; i <= 3; i++) {
    sides.push(Number(prompt("input " + i + " of side", 1)));
}


if (sides.indexOf(NaN) != -1 || sides[0] <= 0 || sides[1] <= 1 || sides[2] <= 0 || square === 0 || NaN(square)) {
    console.log('Invalid value');
} else {
    if (sides[0] === Math.sqrt(sides[1] * sides[1] + sides[2] * sides[2]) || sides[1] === Math.sqrt(sides[0] * sides[0] + sides[2] * sides[2]) || sides[2] === Math.sqrt(sides[1] * sides[1] + sides[0] * sides[0])) {
        triangleType = 'Right triangle';
    } else if (sides[0] === sides[1] && sides[1] === sides[2]) {
        triangleType = 'Equilateral triangle';
    } else if (sides[0] === sides[1] || sides[0] === sides[2] || sides[1] === sides[2]) {
        triangleType = 'Isosceles triangle';
    } else {
        triangleType = 'Scalene triangle';
    }

    square = parseFloat(square.toFixed(2));
    console.log('Triangle type is ' + triangleType + ' and square equals ' + square);
