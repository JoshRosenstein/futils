 // ROSEYS TS

export declare type ToPairs_ = {
(und:undefined): []
(string:string): Array<[number,string]>
<T>(array:T[]): Array<[number,T]>
<T, K extends string> (Object:Record<K, T>):Array<[K,T]>
<T>(set:Set<T>): Array<[T,T]>
<T, K> (map:Map<K,T>):Array<[K,T]>

<T, K extends string> (objectOrString:Record<K, T>|string):Array<[K,T]>| Array<[number,string]>
<T, K extends string> (value: string |T[] |Set<T>|Map<K,T>| Record<K, T>): Array<[string,T]> | Array<[number,string]> | Array<[T,T]> | Array<[K,T]>
}
export declare type ToPairs =ToPairs_

export declare var toPairs_: ToPairs_
export declare var toPairs: ToPairs
export default toPairs
