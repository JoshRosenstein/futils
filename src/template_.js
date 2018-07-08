import path_ from './path_'
import is_ from './is_'
import safeEval_ from './safeEval_'

  export default (string, data) =>
        is_('String', string)
          ? safeEval_(string.replace(/{\!([^}]+)}/g, (_, key) => {
             const res= path_(key, data)
               return res

            }))
          : string


// export default (string, data) => string.replace(/\{\{([^\}]+)?\}\}/g, (_, key)=> {
//     var keyParts = key.split('.');
//     var value = data;
//     for (var i = 0; i < keyParts.length; i++) {
//       value = value[keyParts[i]];
//     }
//     return value || '';
//   })
