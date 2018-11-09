import {
  Any,
  Curried,
  Pipe,
  Divide,
  Flip,
  Round,
  DefaultTo,
  Add,
  Prop,
  Reduce,
  IfElse,
} from './ts-src'
import {CurriedFunction2} from './ts-src/$curriedFunctions'
import {Concat} from './ts-src/concat'

declare let Futils: Futils.Static
declare namespace Futils {
  type PredicateFunctionTypeWithKeyT<T> = ((a: T, b: KeyTypes) => boolean)

  type Add_ = (a: number, b: number) => number

  type AddIndex_ = <A, B>(
    iterFn: (fn: (x: A) => B, xs: Array<A>) => Array<B>,
  ) => (fn: (x: A, idx: number, xs: Array<A>) => B, xs: Array<A>) => Array<B>

  interface Static {
    add: Add
    addIndex: AddIndex
    all: All
    allPass: AllPass
    always: Always
    and: And
    any: Any
    anyPass: AnyPass
    ap: Ap
    append: Append
    apply: Apply
    applyTo: ApplyTo
    argsToList: ArgsToList
    assoc: Assoc
    assocPath: AssocPath
    attach: Attach
    both: Both
    call: Call
    capitalize: Capitalize
    cascadingPath: CascadingPath
    cleanWhitespace: CleanWhitespace
    compact: Compact
    comparator: Comparator
    complement: Complement
    compose: Compose
    concat: Concat
    cond: Cond
    construct: Construct
    constructN: ConstructN
    contains: Contains
    converge: Converge
    curry: Curry
    curryN: CurryN
    dec: Dec
    defaultTo: DefaultTo
    dispatchWith: DispatchWith
    dissoc: Dissoc
    divide: Divide
    divideBy: DivideBy
    doWhile: DoWhile
    drop: Drop
    dropLast: DropLast
    either: Either
    empty: Empty
    endsWith: EndsWith
    ensureArray: EnsureArray
    ensureFunction: EnsureFunction
    equals: Equals
    evolve: Evolve
    F: F
    filter: Filter
    first: First
    flatten: Flatten
    flattenTree: FlattenTree
    flip: Flip
    flow: Flow
    forEach: ForEach
    fromIteratorToArray: FromIteratorToArray
    fromPairs: FromPairs
    getPaths: GetPaths
    groupBy: GroupBy
    gt: Gt
    hammer: Hammer
    has: Has
    head: Head
    identity: Identity
    ifElse: IfElse
    inc: Inc
    indexBy: IndexBy
    inflateTree: InflateTree
    invoker: Invoker
    is: Is
    isArray: IsArray
    isBoolean: IsBoolean
    isDefined: IsDefined
    isEmpty: IsEmpty
    isEmptyArray: IsEmptyArray
    isEnumerable: IsEnumerable
    isFalse: IsFalse
    isFunction: IsFunction
    isGt: IsGt
    isLt: IsLt
    isNil: IsNil
    isNilOrEmpty: IsNilOrEmpty
    isNotNumber: IsNotNumber
    isNotObject: IsNotObject
    isNumber: IsNumber
    isObject: IsObject
    isObjLike: IsObjLike
    isPopulated: IsPopulated
    isPopulatedObject: IsPopulatedObject
    isString: IsString
    isTrue: IsTrue
    join: Join
    juxt: Juxt
    keys: Keys
    last: Last
    length: Length
    lens: Lens
    lensIndex: LensIndex
    lensPath: LensPath
    lensProp: LensProp
    lift: Lift
    liftN: LiftN
    lt: Lt
    map: Map
    mapKeys: MapKeys
    mapKeysWithValueKey: MapKeysWithValueKey
    mapValues: MapValues
    mapValuesWithValueKey: MapValuesWithValueKey
    max: Max
    merge: Merge
    mergeAll: MergeAll
    mergeAllDeepLeft: MergeAllDeepLeft
    mergeAllDeepRight: MergeAllDeepRight
    mergeAllLeft: MergeAllLeft
    mergeDeepLeft: MergeDeepLeft
    mergeDeepRight: MergeDeepRight
    mergeLeft: MergeLeft
    mergeWith: MergeWith
    mergeWithKey: MergeWithKey
    min: Min
    multiply: Multiply
    noop: Noop
    not: Not
    nth: Nth
    objOf: ObjOf
    of: Of
    omit: Omit
    omitKey: OmitKey
    or: Or
    over: Over
    pairsKeys: PairsKeys
    pairsValues: PairsValues
    partial: Partial
    path: Path
    pathApply: PathApply
    pathEq: PathEq
    pathOr: PathOr
    paths: Paths
    pick: Pick
    pickAll: PickAll
    pipe: Pipe
    pluck: Pluck
    plucks: Plucks
    prepend: Prepend
    prop: Prop
    propEq: PropEq
    propOr: PropOr
    props: Props
    reduce: Reduce
    reduceKeys: ReduceKeys
    reduceRight: ReduceRight
    reduceValues: ReduceValues
    reduceWhile: ReduceWhile
    reject: Reject
    rejectNil: RejectNil
    replace: Replace
    replaceWhen: ReplaceWhen
    reverse: Reverse
    round: Round
    sequence: Sequence
    set: Set
    simplyEquals: SimplyEquals
    split: Split
    startsWith: StartsWith
    stubUndefined: StubUndefined
    subtract: Subtract
    T: T
    tail: Tail
    take: Take
    takeLast: TakeLast
    tap: Tap
    template: Template
    test: Test
    toArray: ToArray
    toCamelCase: ToCamelCase
    toKebabCase: ToKebabCase
    toLower: ToLower
    toOrdinal: ToOrdinal
    toPairs: ToPairs
    toPascalCase: ToPascalCase
    toSnakeCase: ToSnakeCase
    toString: (value: any) => string
    toUpper: ToUpper
    toWords: ToWords
    tryCatch: TryCatch
    type: Type
    unapply: Unapply
    uniq: Uniq
    unless: Unless
    update: Update
    useWith: UseWith
    values: Values
    view: View
    when: When
    whenFunctionCallWith: WhenFunctionCallWith
    where: Where
    whereEq: WhereEq
    xPairs: XPairs
    xprod: Xprod
    zip: Zip
    zipApply: ZipApply
  }
}

export = Futils
