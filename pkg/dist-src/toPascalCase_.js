export default str => str
    .split(/[\s\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]+/)
    .reduce((res, word) => word === '' ? res : res.concat(word[0].toUpperCase(), word.slice(1)), '');
