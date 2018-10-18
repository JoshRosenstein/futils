// @flow
//import is_ from './is_'

//export default (value: any): %checks => is_('String', value)

/// Needed for flow checks??
export default (val: *): %checks => typeof val === 'string'
