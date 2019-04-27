/**
 * Make all properties in T required, but keep undefined in their type
 */
declare type Explicit<T> = {
    [K in keyof Required<T>]: T[K];
};
/**
 * Turn type union into type intersection
 */
declare type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;
//# sourceMappingURL=types.d.ts.map