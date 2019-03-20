/// <reference types="jest" />
export declare const createCounter: () => {
    count: jest.Mock<any, any>;
    fn: <T>() => (array: T[]) => T[];
};
