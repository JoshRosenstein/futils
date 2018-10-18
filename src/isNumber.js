// @flow
///Change to support flow type checks
export default (val: *): %checks => val == val && typeof val === 'number'
