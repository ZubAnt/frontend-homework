'use strict';

function solve(pExpression, pNumber)
{
    return math.eval(pExpression.replace(/x/g, pNumber.toString()))
}