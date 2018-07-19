import curryN_ from './curryN_'
import pluck_ from './pluck_'
import reduceValues_ from './reduceValues_'

export default (after, fns) => curryN_(
  reduceValues_((a, b) => (b > a ? b : a), 0, pluck_('length', fns)),
  function() {
    const args = arguments
    const context = this
    return after.apply(context, fns.map(fn => fn.apply(context, args)))
  }
)
