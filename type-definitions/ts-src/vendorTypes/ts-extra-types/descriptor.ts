export type DataPropertyDescriptor<V = any> = {
    configurable?: boolean;
    enumerable?: boolean;
    value?: V;
    writable?: boolean;
};

export type DescriptorGetter<T> = {
    get(): T;
};

export type DescriptorSetter<T> = {
    set(value: T): void;
};

export type AccessorPropertyDescriptor<T = any> = {
        configurable?: boolean;
        enumerable?: boolean;
    }
    & Partial<DescriptorGetter<T> & DescriptorSetter<T>>
    & (DescriptorGetter<T> | DescriptorSetter<T>);

export type DescriptorOf<T, K extends PropertyKey> = TypedPropertyDescriptor<(K extends keyof T ? T[K] : unknown)>;

