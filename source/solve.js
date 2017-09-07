'use strict';

function solve(pExpression, pNumber)
{
    try
    {
        var func = new Function("x", 'return ' + pExpression + ';');
    }
    catch (err)
    {
        console.log(err)
        return NaN;
    }
    var result  = func(pNumber);
    if (isFinite(result) === false)
    {
        return NaN;
    }

    return result
}