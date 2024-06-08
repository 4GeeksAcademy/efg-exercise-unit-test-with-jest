const sum = (a,b) => {
    return a + b;
}

const oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    return valueInDollar;
}

function fromDollarToYen (dollars) {
    const euros = dollars / oneEuroIs.USD;
    const yen = euros * oneEuroIs.JPY;
    return yen;
}

function fromYenToPounds(yen) {
    const euros = yen / oneEuroIs.JPY;
    const pound = euros * oneEuroIs.GBP;
    return pound;
}


module.exports = { sum, fromEuroToDollar, fromDollarToYen, oneEuroIs, fromYenToPounds };
