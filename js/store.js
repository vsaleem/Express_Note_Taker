// This package will be used to generate our unique ids. https://www.npmjs.com/package/uuid
const uuidv1 = require('uuid/v1');

module.exports = function(body){
   return data = {
      title: body.title,
      text: body.text,
      id: uuidv1()
   }
}