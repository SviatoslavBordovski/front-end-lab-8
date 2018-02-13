var numFloors = Number(prompt("enter natural number from one to twenty", 1));
var row = '';
if (isNaN(floors) || numFloors % 1 != 0 || numFloors <= 0 || numFloors > 20) {
    console.error('Incorrect data!'); /* check for validation */
} else {
    for (var i = 1; i <= numFloors; i++) {
        for (var k = 1; k <= (numFloors - i); k++) {
            row = row.concat('   '); /* using spaces for pyramid */
        }
        for (var j = 2; j <= i; j++) {
            row = row.concat('[~][~]'); /* using square brackets for pyramid */
        }
        row = row.concat('[~]\n'); /* using \n (new line) characters for pyramid */
    }
}

console.log(row);