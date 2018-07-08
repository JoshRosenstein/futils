export default v=>{
  let val
  try {
 val= (new Function( 'return ' + v ) )()
  }
  catch(error) {
  return v
  }
return val
}
