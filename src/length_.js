
import values_ from './values_'
export default obj => obj.length || obj.size || values_(obj).length
