var usdER = 27.12;
var euroER = 33.23;

var euro = Number(prompt('enter amount of euro', 1));
var usd = Number(prompt('enter amount of usd', 1));

var usdToUah = parseFloat(usdER * usd);
var euroToUah = parseFloat(euroER * euro);
var euroToUsd = parseFloat(euroER / usdER);

if (isNaN(euro) || isNaN(usd)) {
    console.log('Invalid value')
} else {
    console.log(euro + ' euros are equal ' + euroToUah + ' UAH ' + usd + ' dollars are equal ' + usdToUah + ' one euro is equal ' + euroToUsd + ' dollars');
}

/*Info imported from https://kurs.com.ua*/
