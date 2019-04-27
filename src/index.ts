/// <reference path="types.ts" />
// the above line makes sure that global types get loaded
// even when the project is used as a module


import padLeft from 'left-pad';
import { CommonType, reverse } from './reverse';

export { CommonType } from './reverse';

export function padRight(str: CommonType, len: number, ch?: CommonType)
{
    return reverse( padLeft(reverse(str), len, ch) );
}

export function merge<Args extends object[]>(...args: Args): UnionToIntersection<Args[number]>
{
    return args.reduce( (a, b) => ({...a, ...b}) ) as any;
}
