export type DefaultTo_ = {
  <T>(defaults: T, value: null | undefined): T
  <T, U>(defaults: T, value: U | null | undefined): T | U
}

export interface DefaultTo extends DefaultTo_ {
  <T>(defaults: T): {
    (value: null | undefined): T
    <U>(value: U | null | undefined): T | U
  }
}
