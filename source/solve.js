'use strict';

function solve(pExpression, pNumber)
{
    if (isNaN(parseFloat(pNumber)) === true || isFinite(pNumber) === false)
    {
        console.log("bad input parameter: " + pNumber);
        return NaN;
    }
    try
    {
        let func = new Function("x", 'return ' + pExpression + ';');
        let result  = func(pNumber);
        if (isFinite(result) === false)
        {
            return NaN;
        }
        return result;

    }
    catch (err)
    {
        console.log(err)
        return NaN;
    }
}