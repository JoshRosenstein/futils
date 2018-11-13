import {add, curry, any, pipe, prop} from '../../'
 
type Morphism<T, U> = (value: T) => U
type Predicate<T> = Morphism<T, boolean>

declare const string_predicate: Predicate<string>
declare const string_array: string[]
declare const number: number

{
  any(string_predicate)(string_array)
}

{
  add(number, number)
  add(number)(number)
}

declare const string_to_object: (x: string) => object
declare const number_boolean_to_string: (x: number, y: boolean) => string
declare const number_args_to_boolean: (...args: number[]) => boolean
declare const five_string_to_number: (
  v1: string,
  v2: string,
  v3: string,
  v4: string,
  v5: string,
) => number

{
  curry(string_to_object)
  // @dts-jest:pass:snap
  curry(number_boolean_to_string)
  // @dts-jest:pass:snap
  curry(number_args_to_boolean)
  // @dts-jest:pass:snap
  curry(five_string_to_number)
}

declare const boolean_to_number: (x: boolean) => number
declare const boolean_to_string: (x: boolean) => string
declare const number_to_boolean: (x: number) => boolean
declare const number_to_string: (x: number) => string
declare const string_to_boolean: (x: string) => boolean
declare const string_to_number: (x: string) => number
declare const a_b_c_d_e_f_to_any: (
  a: null,
  b: undefined,
  c: boolean,
  d: number,
  e: string,
  f: object,
) => any

{
  // @dts-jest:pass:snap
  pipe(boolean_to_number)
  // @dts-jest:pass:snap
  pipe(a_b_c_d_e_f_to_any)

  // @dts-jest:pass:snap
  pipe(
    string_to_boolean,
    boolean_to_number,
  )
  // @dts-jest:pass:snap
  pipe(
    a_b_c_d_e_f_to_any,
    boolean_to_number,
  )

  // @dts-jest:pass:snap
  pipe(
    number_to_string,
    string_to_boolean,
    boolean_to_number,
  )
  // @dts-jest:pass:snap
  pipe(
    a_b_c_d_e_f_to_any,
    string_to_boolean,
    boolean_to_number,
  )

  // @dts-jest:pass:snap
  pipe(
    string_to_number,
    number_to_string,
    string_to_boolean,
    boolean_to_number,
  )
  // @dts-jest:pass:snap
  pipe(
    a_b_c_d_e_f_to_any,
    number_to_string,
    string_to_boolean,
    boolean_to_number,
  )

  // @dts-jest:pass:snap
  pipe(
    boolean_to_string,
    string_to_number,
    number_to_string,
    string_to_boolean,
    boolean_to_number,
  )
  // @dts-jest:pass:snap
  pipe(
    a_b_c_d_e_f_to_any,
    string_to_number,
    number_to_string,
    string_to_boolean,
    boolean_to_number,
  )

  // @dts-jest:pass:snap
  pipe(
    number_to_boolean,
    boolean_to_string,
    string_to_number,
    number_to_string,
    string_to_boolean,
    boolean_to_number,
  )
  // @dts-jest:pass:snap
  pipe(
    a_b_c_d_e_f_to_any,
    boolean_to_string,
    string_to_number,
    number_to_string,
    string_to_boolean,
    boolean_to_number,
  )
}

{
  const a = prop('a')({a: 1})
  const b = prop('1')([1])
}
