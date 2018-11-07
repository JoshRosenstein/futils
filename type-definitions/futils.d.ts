declare namespace Futils {
  export function add_(a: number, b: number): number
  export function add(a: number, b: number): number
}

declare module 'futils' {
  export = Futils
}
