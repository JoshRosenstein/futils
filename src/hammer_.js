import path_ from './path_'
import merge_ from './merge_'
import omitKey_ from './omitKey_'


export default (key, keyedEnumerable) => merge_(omitKey_(key, keyedEnumerable), path_(key, keyedEnumerable))
