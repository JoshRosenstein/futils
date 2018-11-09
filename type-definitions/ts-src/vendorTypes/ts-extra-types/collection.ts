export interface Lengthwise {
    length: number;
}

export interface Sizeable {
    size(): number;
}

export interface IterableEntries<E> {
    entries(): IterableIterator<E>;
}

export interface IterableKeys<K> {
    keys(): IterableIterator<K>;
}

export interface IterableValues<V> {
    values(): IterableIterator<V>;
}

export interface IterableValue<V> {
    get(): IterableIterator<V>;
}