export default (str)=> str
.replace(/[A-Z\u00C0-\u00D6\u00D9-\u00DD]/g, match=> ' ' + (match.toLowerCase() || match))
.trim()
.split(/[\s\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]+/)
.join('_');
