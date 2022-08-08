const {querystring} = require('querystring');
var str = "name=joeyee&age=18";
var res = querystring.parse(str);
console.log(res);

