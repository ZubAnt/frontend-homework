'use strict';

function solve(pExpression, pNumber) {

    if (isNaN(parseFloat(pNumber))) {

        console.log("bad input parameter: " + pNumber);
        return NaN;
    }
    try {

        let func = new Function("x", 'return ' + pExpression + ';');
        return func(pNumber);

    }
    catch (err) {

        console.log(err);
        return NaN;
    }
}