import { mapArr } from '../mapArr';
export const createCounter = () => {
    const count = jest.fn();
    return {
        count,
        fn: () => mapArr(x => {
            count();
            return x;
        }),
    };
};
//# sourceMappingURL=_counter.js.map