import reduce_ from './reduce_'
import merge_ from './merge_'
import join_ from './join_'
import isPopulated_ from './isPopulated_'
import is_ from './is_'
import mapValues_ from './mapValues_'
import append_ from './append_'
import prepend_ from './prepend_'


const flattenTreeDelimiterMapping=nested=>reduce_((accumulated,treeOrLeaf,key) => {
  if (is_('Object',treeOrLeaf) && isPopulated_(treeOrLeaf)) {
    return merge_(accumulated,
      mapValues_(([keys, leaf]) =>append_(leaf,[prepend_(key,keys)]),flattenTreeDelimiterMapping(treeOrLeaf)
      )
    )
  }

  return prepend_([[key], treeOrLeaf],accumulated)
}
  ,[],nested)


export default (delimiter,recordTree)=> reduce_((accumulated,[keys, value])=>
  merge_(accumulated,{[join_(delimiter,keys)]: value}),{}
  ,flattenTreeDelimiterMapping(recordTree))
