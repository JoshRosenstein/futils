// @flow
//import is_ from './is_'

//export default (value: any): %checks => is_('String', value)

/// Needed for flow checks??

//export type IsString_ = ((val: string) => true) & ((val: any) => false)

const isString_ = (val: mixed): boolean %checks => typeof val === 'string'
export default isString_
