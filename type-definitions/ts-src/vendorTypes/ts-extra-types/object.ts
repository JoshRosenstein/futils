export type KeyOf<T, K extends string & keyof T = string & keyof T> = K;
export type KeysOf<T, K extends string & keyof T = string & keyof T> = K[];

export type SymbolOf<T, K extends symbol & keyof T = symbol & keyof T> = K;
export type SymbolsOf<T, K extends symbol & keyof T = symbol & keyof T> = K[];

export type IndexOf<T, K extends number & keyof T = number & keyof T> = K;
export type IndexesOf<T, K extends number & keyof T = number & keyof T> = K[];

export type ValueOf<T, K extends keyof T = keyof T> = T[K];
export type ValuesOf<T, K extends keyof T = keyof T> = Array<T[K]>;

export type EntryOf<T, K extends keyof T = keyof Required<T>> = { [P in keyof Required<T>]: [P, T[P]] }[K];
export type EntriesOf<T, K extends keyof T = keyof T> = Array<EntryOf<T, K>>;

export type KeysOfType<T, U> = { [K in keyof T]: T[K] extends U ? K : never }[keyof T];

export type Omit<T, K extends PropertyKey> = Pick<T, Exclude<keyof T, K>>;
export type Overwrite<T, U> = Omit<T, keyof U> & U;
export type Rewrite<T> = { [K in keyof T]: T[K] };

export type OptionalKeys<T> = {
    [K in keyof Required<T>]: [Partial<Pick<T, K>>] extends [Pick<T, K>] ? K : never
}[keyof Required<T>];

export type RequiredKeys<T> = {
    [K in keyof Required<T>]: [Pick<T, K>] extends [Required<Pick<T, K>>] ? K : never
}[keyof Required<T>];

export type Require<T, K extends keyof T = keyof T> = T & {
    [P in K]-?: T[P]
};

export type Optional<T, K extends keyof T = keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type Ensure<T, K extends PropertyKey> = T & {
    [P in K]-?: P extends OptionalKeys<T> ? T[P] | undefined :
                P extends keyof Required<T> ? T[P] :
                unknown
};