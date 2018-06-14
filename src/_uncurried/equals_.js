import _type from "./_type";



// Extracted out of jest
function hasKey_(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key)
}

function keys_(obj, isArray) {
  var allKeys = (function(o) {
    var keys = []
    for (var key in o) {
      if (hasKey_(o, key)) {
        keys.push(key)
      }
    }
    return keys.concat(
      (Object.getOwnPropertySymbols(o): Array<any>).filter(
        //$FlowFixMe Jest complains about nullability, but we know for sure that property 'symbol' does exist.
        symbol => Object.getOwnPropertyDescriptor(o, symbol).enumerable
      )
    )
  })(obj)

  if (!isArray) {
    return allKeys
  }

  var extraKeys = []
  if (allKeys.length === 0) {
    return allKeys
  }

  for (var x = 0; x < allKeys.length; x++) {
    if (!allKeys[x].match(/^[0-9]+$/)) {
      extraKeys.push(allKeys[x])
    }
  }

  return extraKeys
}

 const _equals_ = (a, b, aStack=[], bStack=[]) => {
  var result = true
  if (a === b) return true
  if (a == null || b == null) return a === b

  var typeA = _type(a)
  var typeB = _type(b)
  if (typeA !== typeB) return false

  switch (typeA) {
    case "String":
    case "Number": {
      return a.valueOf() === b.valueOf()
    }
    case "Boolean":
    case "Date": {
      return +a === +b
    }
    case "RegExp": {
      return a.toString() === b.toString()
    }
    default: {
    }
  }

  if (typeof a !== "object" || typeof b !== "object") {
    return false
  }

  var length = aStack.length
  while (length--) {
    // Linear search. Performance is inversely proportional to the number of
    // unique nested structures.
    if (aStack[length] === a) {
      return bStack[length] === b
    }
  }

  // Add the first object to the stack of traversed objects.
  aStack.push(a)
  bStack.push(b)
  var size = 0

  if (typeA === "Array") {
    size = a.length
    if (size !== b.length) {
      return false
    }

    while (size--) {
      result = eq_(a[size], b[size], aStack, bStack, hasKey_)
      if (!result) {
        return false
      }
    }
  }

  // Deep compare objects.
  var aKeys = keys_(a, typeA === "Array")
  var key
  size = aKeys.length

  var bKeys = keys_(b, typeB === "Array")
  if (keys_(b, typeB === "Array").length !== size) {
    return false
  }

  while (size--) {
    key = aKeys[size]

    // Deep compare each member
    result = hasKey_(b, key) && eq_(a[key], b[key], aStack, bStack)

    if (!result) {
      return false
    }
  }
  // Remove the first object from the stack of traversed objects.
  aStack.pop()
  bStack.pop()

  return result
}

export default (a,b)=>_equals_(a,b)
