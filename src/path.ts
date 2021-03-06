import { curry2_ } from './_internal/curry2_';
import { prop_ } from './prop';
import { reduceValues_ } from './reduceValues';
import { splitWhenNoSpace_ } from './_internal/splitWhenNoSpace_';
import { isString } from 'typed-is';

export const path_: Path_ = (keys, tree) => {
  if (tree) {
    if (isString(keys) && tree[keys]) {
      return tree[keys];
    }

    return reduceValues_(
      (acc, val) => prop_(val, acc),
      tree,
      splitWhenNoSpace_(keys, '.'),
    );
  }
};
export const path: Path = curry2_(path_);

export default path;

import { Path as PathT } from './_types/$types';

export type Path_ = {
  <T1 extends string, T2 extends string, TResult>(
    path: [T1, T2],
    obj: { [K1 in T1]: { [K2 in T2]: TResult } },
  ): TResult;
  <T1 extends string, T2 extends string, T3 extends string, TResult>(
    path: [T1, T2, T3],
    obj: { [K1 in T1]: { [K2 in T2]: { [K3 in T3]: TResult } } },
  ): TResult;
  <
    T1 extends string,
    T2 extends string,
    T3 extends string,
    T4 extends string,
    TResult
  >(
    path: [T1, T2, T3, T4],
    obj: {
      [K1 in T1]: { [K2 in T2]: { [K3 in T3]: { [K4 in T4]: TResult } } }
    },
  ): TResult;
  <
    T1 extends string,
    T2 extends string,
    T3 extends string,
    T4 extends string,
    T5 extends string,
    TResult
  >(
    path: [T1, T2, T3, T4, T5],
    obj: {
      [K1 in T1]: {
        [K2 in T2]: { [K3 in T3]: { [K4 in T4]: { [K5 in T5]: TResult } } }
      }
    },
  ): TResult;
  <
    T1 extends string,
    T2 extends string,
    T3 extends string,
    T4 extends string,
    T5 extends string,
    T6 extends string,
    TResult
  >(
    path: [T1, T2, T3, T4, T5, T6],
    obj: {
      [K1 in T1]: {
        [K2 in T2]: {
          [K3 in T3]: { [K4 in T4]: { [K5 in T5]: { [K6 in T6]: TResult } } }
        }
      }
    },
  ): TResult;
  <
    T1 extends string,
    T2 extends string,
    T3 extends string,
    T4 extends string,
    T5 extends string,
    T6 extends string,
    T7 extends string,
    TResult
  >(
    path: [T1, T2, T3, T4, T5, T6, T7],
    obj: {
      [K1 in T1]: {
        [K2 in T2]: {
          [K3 in T3]: {
            [K4 in T4]: { [K5 in T5]: { [K6 in T6]: { [K7 in T7]: TResult } } }
          }
        }
      }
    },
  ): TResult;
  <
    T1 extends string,
    T2 extends string,
    T3 extends string,
    T4 extends string,
    T5 extends string,
    T6 extends string,
    T7 extends string,
    T8 extends string,
    TResult
  >(
    path: [T1, T2, T3, T4, T5, T6, T7, T8],
    obj: {
      [K1 in T1]: {
        [K2 in T2]: {
          [K3 in T3]: {
            [K4 in T4]: {
              [K5 in T5]: {
                [K6 in T6]: { [K7 in T7]: { [K8 in T8]: TResult } }
              }
            }
          }
        }
      }
    },
  ): TResult;
  <
    T1 extends string,
    T2 extends string,
    T3 extends string,
    T4 extends string,
    T5 extends string,
    T6 extends string,
    T7 extends string,
    T8 extends string,
    T9 extends string,
    TResult
  >(
    path: [T1, T2, T3, T4, T5, T6, T7, T8, T9],
    obj: {
      [K1 in T1]: {
        [K2 in T2]: {
          [K3 in T3]: {
            [K4 in T4]: {
              [K5 in T5]: {
                [K6 in T6]: {
                  [K7 in T7]: { [K8 in T8]: { [K9 in T9]: TResult } }
                }
              }
            }
          }
        }
      }
    },
  ): TResult;
  <K1 extends string, K2 extends string, TResult>(
    path: [K1, K2],
    obj: Record<K1, Record<K2, TResult>>,
  ): TResult;
  <K1 extends string, K2 extends string, K3 extends string, TResult>(
    path: [K1, K2, K3],
    obj: Record<K1, Record<K2, Record<K3, TResult>>>,
  ): TResult;
  <
    K1 extends string,
    K2 extends string,
    K3 extends string,
    K4 extends string,
    TResult
  >(
    path: [K1, K2, K3, K4],
    obj: Record<K1, Record<K2, Record<K3, Record<K4, TResult>>>>,
  ): TResult;
  <
    K1 extends string,
    K2 extends string,
    K3 extends string,
    K4 extends string,
    K5 extends string,
    TResult
  >(
    path: [K1, K2, K3, K4, K5],
    obj: Record<K1, Record<K2, Record<K3, Record<K4, Record<K5, TResult>>>>>,
  ): TResult;
  <
    K1 extends string,
    K2 extends string,
    K3 extends string,
    K4 extends string,
    K5 extends string,
    K6 extends string,
    TResult
  >(
    path: [K1, K2, K3, K4, K5, K6],
    obj: Record<
      K1,
      Record<K2, Record<K3, Record<K4, Record<K5, Record<K6, TResult>>>>>
    >,
  ): TResult;
  <
    K1 extends string,
    K2 extends string,
    K3 extends string,
    K4 extends string,
    K5 extends string,
    K6 extends string,
    K7 extends string,
    TResult
  >(
    path: [K1, K2, K3, K4, K5, K6, K7],
    obj: Record<
      K1,
      Record<
        K2,
        Record<K3, Record<K4, Record<K5, Record<K6, Record<K7, TResult>>>>>
      >
    >,
  ): TResult;
  <
    K1 extends string,
    K2 extends string,
    K3 extends string,
    K4 extends string,
    K5 extends string,
    K6 extends string,
    K7 extends string,
    K8 extends string,
    TResult
  >(
    path: [K1, K2, K3, K4, K5, K6, K7, K8],
    obj: Record<
      K1,
      Record<
        K2,
        Record<
          K3,
          Record<K4, Record<K5, Record<K6, Record<K7, Record<K8, TResult>>>>>
        >
      >
    >,
  ): TResult;
  <
    K1 extends string,
    K2 extends string,
    K3 extends string,
    K4 extends string,
    K5 extends string,
    K6 extends string,
    K7 extends string,
    K8 extends string,
    K9 extends string,
    TResult
  >(
    path: [K1, K2, K3, K4, K5, K6, K7, K8, K9],
    obj: Record<
      K1,
      Record<
        K2,
        Record<
          K3,
          Record<
            K4,
            Record<K5, Record<K6, Record<K7, Record<K8, Record<K9, TResult>>>>>
          >
        >
      >
    >,
  ): TResult;
  <T1 extends string, T2 extends string, TResult>(
    path: [T1, T2],
    obj: { [K1 in T1]: { [K2 in T2]: TResult } },
  ): TResult;
  <T1 extends string, T2 extends number, TResult>(
    path: [T1, T2],
    obj: { [K1 in T1]: TResult[] },
  ): TResult;
  <T1 extends number, T2 extends string, TResult>(
    path: [T1, T2],
    obj: Array<{ [K2 in T2]: TResult }>,
  ): TResult;
  <T1 extends number, T2 extends number, TResult>(
    path: [T1, T2],
    obj: TResult[][],
  ): TResult;
  <T1 extends string, T2 extends string, T3 extends string, TResult>(
    path: [T1, T2, T3],
    obj: { [K1 in T1]: { [K2 in T2]: { [K3 in T3]: TResult } } },
  ): TResult;
  <T1 extends string, T2 extends string, T3 extends number, TResult>(
    path: [T1, T2, T3],
    obj: { [K1 in T1]: { [K2 in T2]: TResult[] } },
  ): TResult;
  <T1 extends string, T2 extends number, T3 extends string, TResult>(
    path: [T1, T2, T3],
    obj: { [K1 in T1]: Array<{ [K3 in T3]: TResult }> },
  ): TResult;
  <T1 extends string, T2 extends number, T3 extends number, TResult>(
    path: [T1, T2, T3],
    obj: { [K1 in T1]: TResult[][] },
  ): TResult;
  <T1 extends number, T2 extends string, T3 extends string, TResult>(
    path: [T1, T2, T3],
    obj: Array<{ [K2 in T2]: { [K3 in T3]: TResult } }>,
  ): TResult;
  <T1 extends number, T2 extends string, T3 extends number, TResult>(
    path: [T1, T2, T3],
    obj: Array<{ [K2 in T2]: TResult[] }>,
  ): TResult;
  <T1 extends number, T2 extends number, T3 extends string, TResult>(
    path: [T1, T2, T3],
    obj: Array<Array<{ [K3 in T3]: TResult }>>,
  ): TResult;
  <T1 extends number, T2 extends number, T3 extends number, TResult>(
    path: [T1, T2, T3],
    obj: TResult[][][],
  ): TResult;
  <T>(path: PathT, object: {}): PathT_11<T>;
};

export type Path = {
  (path: PathT): PathT_10;
  <T1 extends string, T2 extends string, TResult>(
    path: [T1, T2],
    obj: { [K1 in T1]: { [K2 in T2]: TResult } },
  ): TResult;
  <T1 extends string, T2 extends string, T3 extends string, TResult>(
    path: [T1, T2, T3],
    obj: { [K1 in T1]: { [K2 in T2]: { [K3 in T3]: TResult } } },
  ): TResult;
  <
    T1 extends string,
    T2 extends string,
    T3 extends string,
    T4 extends string,
    TResult
  >(
    path: [T1, T2, T3, T4],
    obj: {
      [K1 in T1]: { [K2 in T2]: { [K3 in T3]: { [K4 in T4]: TResult } } }
    },
  ): TResult;
  <
    T1 extends string,
    T2 extends string,
    T3 extends string,
    T4 extends string,
    T5 extends string,
    TResult
  >(
    path: [T1, T2, T3, T4, T5],
    obj: {
      [K1 in T1]: {
        [K2 in T2]: { [K3 in T3]: { [K4 in T4]: { [K5 in T5]: TResult } } }
      }
    },
  ): TResult;
  <
    T1 extends string,
    T2 extends string,
    T3 extends string,
    T4 extends string,
    T5 extends string,
    T6 extends string,
    TResult
  >(
    path: [T1, T2, T3, T4, T5, T6],
    obj: {
      [K1 in T1]: {
        [K2 in T2]: {
          [K3 in T3]: { [K4 in T4]: { [K5 in T5]: { [K6 in T6]: TResult } } }
        }
      }
    },
  ): TResult;
  <
    T1 extends string,
    T2 extends string,
    T3 extends string,
    T4 extends string,
    T5 extends string,
    T6 extends string,
    T7 extends string,
    TResult
  >(
    path: [T1, T2, T3, T4, T5, T6, T7],
    obj: {
      [K1 in T1]: {
        [K2 in T2]: {
          [K3 in T3]: {
            [K4 in T4]: { [K5 in T5]: { [K6 in T6]: { [K7 in T7]: TResult } } }
          }
        }
      }
    },
  ): TResult;
  <
    T1 extends string,
    T2 extends string,
    T3 extends string,
    T4 extends string,
    T5 extends string,
    T6 extends string,
    T7 extends string,
    T8 extends string,
    TResult
  >(
    path: [T1, T2, T3, T4, T5, T6, T7, T8],
    obj: {
      [K1 in T1]: {
        [K2 in T2]: {
          [K3 in T3]: {
            [K4 in T4]: {
              [K5 in T5]: {
                [K6 in T6]: { [K7 in T7]: { [K8 in T8]: TResult } }
              }
            }
          }
        }
      }
    },
  ): TResult;
  <
    T1 extends string,
    T2 extends string,
    T3 extends string,
    T4 extends string,
    T5 extends string,
    T6 extends string,
    T7 extends string,
    T8 extends string,
    T9 extends string,
    TResult
  >(
    path: [T1, T2, T3, T4, T5, T6, T7, T8, T9],
    obj: {
      [K1 in T1]: {
        [K2 in T2]: {
          [K3 in T3]: {
            [K4 in T4]: {
              [K5 in T5]: {
                [K6 in T6]: {
                  [K7 in T7]: { [K8 in T8]: { [K9 in T9]: TResult } }
                }
              }
            }
          }
        }
      }
    },
  ): TResult;
  <K1 extends string, K2 extends string, TResult>(
    path: [K1, K2],
    obj: Record<K1, Record<K2, TResult>>,
  ): TResult;
  <K1 extends string, K2 extends string, K3 extends string, TResult>(
    path: [K1, K2, K3],
    obj: Record<K1, Record<K2, Record<K3, TResult>>>,
  ): TResult;
  <
    K1 extends string,
    K2 extends string,
    K3 extends string,
    K4 extends string,
    TResult
  >(
    path: [K1, K2, K3, K4],
    obj: Record<K1, Record<K2, Record<K3, Record<K4, TResult>>>>,
  ): TResult;
  <
    K1 extends string,
    K2 extends string,
    K3 extends string,
    K4 extends string,
    K5 extends string,
    TResult
  >(
    path: [K1, K2, K3, K4, K5],
    obj: Record<K1, Record<K2, Record<K3, Record<K4, Record<K5, TResult>>>>>,
  ): TResult;
  <
    K1 extends string,
    K2 extends string,
    K3 extends string,
    K4 extends string,
    K5 extends string,
    K6 extends string,
    TResult
  >(
    path: [K1, K2, K3, K4, K5, K6],
    obj: Record<
      K1,
      Record<K2, Record<K3, Record<K4, Record<K5, Record<K6, TResult>>>>>
    >,
  ): TResult;
  <
    K1 extends string,
    K2 extends string,
    K3 extends string,
    K4 extends string,
    K5 extends string,
    K6 extends string,
    K7 extends string,
    TResult
  >(
    path: [K1, K2, K3, K4, K5, K6, K7],
    obj: Record<
      K1,
      Record<
        K2,
        Record<K3, Record<K4, Record<K5, Record<K6, Record<K7, TResult>>>>>
      >
    >,
  ): TResult;
  <
    K1 extends string,
    K2 extends string,
    K3 extends string,
    K4 extends string,
    K5 extends string,
    K6 extends string,
    K7 extends string,
    K8 extends string,
    TResult
  >(
    path: [K1, K2, K3, K4, K5, K6, K7, K8],
    obj: Record<
      K1,
      Record<
        K2,
        Record<
          K3,
          Record<K4, Record<K5, Record<K6, Record<K7, Record<K8, TResult>>>>>
        >
      >
    >,
  ): TResult;
  <
    K1 extends string,
    K2 extends string,
    K3 extends string,
    K4 extends string,
    K5 extends string,
    K6 extends string,
    K7 extends string,
    K8 extends string,
    K9 extends string,
    TResult
  >(
    path: [K1, K2, K3, K4, K5, K6, K7, K8, K9],
    obj: Record<
      K1,
      Record<
        K2,
        Record<
          K3,
          Record<
            K4,
            Record<K5, Record<K6, Record<K7, Record<K8, Record<K9, TResult>>>>>
          >
        >
      >
    >,
  ): TResult;
  <T1 extends string, T2 extends string, TResult>(
    path: [T1, T2],
    obj: { [K1 in T1]: { [K2 in T2]: TResult } },
  ): TResult;
  <T1 extends string, T2 extends number, TResult>(
    path: [T1, T2],
    obj: { [K1 in T1]: TResult[] },
  ): TResult;
  <T1 extends number, T2 extends string, TResult>(
    path: [T1, T2],
    obj: Array<{ [K2 in T2]: TResult }>,
  ): TResult;
  <T1 extends number, T2 extends number, TResult>(
    path: [T1, T2],
    obj: TResult[][],
  ): TResult;
  <T1 extends string, T2 extends string, T3 extends string, TResult>(
    path: [T1, T2, T3],
    obj: { [K1 in T1]: { [K2 in T2]: { [K3 in T3]: TResult } } },
  ): TResult;
  <T1 extends string, T2 extends string, T3 extends number, TResult>(
    path: [T1, T2, T3],
    obj: { [K1 in T1]: { [K2 in T2]: TResult[] } },
  ): TResult;
  <T1 extends string, T2 extends number, T3 extends string, TResult>(
    path: [T1, T2, T3],
    obj: { [K1 in T1]: Array<{ [K3 in T3]: TResult }> },
  ): TResult;
  <T1 extends string, T2 extends number, T3 extends number, TResult>(
    path: [T1, T2, T3],
    obj: { [K1 in T1]: TResult[][] },
  ): TResult;
  <T1 extends number, T2 extends string, T3 extends string, TResult>(
    path: [T1, T2, T3],
    obj: Array<{ [K2 in T2]: { [K3 in T3]: TResult } }>,
  ): TResult;
  <T1 extends number, T2 extends string, T3 extends number, TResult>(
    path: [T1, T2, T3],
    obj: Array<{ [K2 in T2]: TResult[] }>,
  ): TResult;
  <T1 extends number, T2 extends number, T3 extends string, TResult>(
    path: [T1, T2, T3],
    obj: Array<Array<{ [K3 in T3]: TResult }>>,
  ): TResult;
  <T1 extends number, T2 extends number, T3 extends number, TResult>(
    path: [T1, T2, T3],
    obj: TResult[][][],
  ): TResult;
  <T>(path: PathT, object: {}): PathT_11<T>;
};

type PathT_10 = {
  <T>(object: {}): PathT_11<T>;
};
type PathT_11<T> = T | undefined;
