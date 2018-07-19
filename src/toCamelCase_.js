export default (str) =>str.trim()
  .split(/[\s\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]+/)
  .reduce((res,word,i)=>word===''?res: res.concat( i>0?word[0].toUpperCase():word[0].toLowerCase() , word.slice(1)),'')
