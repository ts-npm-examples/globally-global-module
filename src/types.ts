// This file must not contain any imports and exports


/**
 * Make all properties in T required, but keep undefined in their type
 */
type Explicit<T> =
{
    [K in keyof Required<T>]: T[K]
};


/**
 * Turn type union into type intersection
 */
type UnionToIntersection<U> =
    (U extends any
        ? (k: U) => void
        : never
    ) extends (
        (k: infer I) => void
    )
    ? I : never;
