export type Head<List extends any[]> =
    List extends [infer H, ...any[]] ? H :
    List extends Array<infer R> ? R : never;

export type Tail<List extends any[]> = ((...t: List) => any) extends ((h: any, ...rest: infer R) => any) ? R : never;

export type Last<List extends any[]> = List[Tail<List>["length"]];

export type Unshift<List extends any[], Item> =
    ((first: Item, ...rest: List) => any) extends ((...list: infer R) => any) ? R : never;

export type Reverse<List extends any[], Result extends any[] = []> = {
    1: Result,
    0: Reverse<Tail<List>, Unshift<Result, Head<List>>>,
}[List extends [] ? 1 : 0];