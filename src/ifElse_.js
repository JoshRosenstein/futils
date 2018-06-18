export default (predicate, consequent, alternative, value) => 
  predicate(value) ? consequent(value) : alternative(value)
