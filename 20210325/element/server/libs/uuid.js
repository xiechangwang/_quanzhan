const { v4: uuidv4 } = require('uuid');

let uuid=()=>{
  return  uuidv4().replace(/\-/g,'');
}

module.exports=uuid;
