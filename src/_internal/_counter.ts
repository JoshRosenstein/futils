import { mapArr } from '../mapArr';

export const createCounter = () => {
  const count = jest.fn();
  return {
    count,
    fn: <T>() =>
      mapArr<T, T>((x) => {
        count();
        return x;
      }),
  };
};
